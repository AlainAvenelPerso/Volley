import { Component, ChangeDetectorRef, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SupabaseService } from '../services/supabase.service';
import { GlobalService } from '../services/global';
import { AuthService } from '../services/auth.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { LigneImportEquipe, ResultatImport } from '../../models/models';

/** Adapter qui affiche/parse les dates au format JJ/MM/AAAA. */
export class FrDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    const jj = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const aaaa = date.getFullYear();
    return `${jj}/${mm}/${aaaa}`;
  }
}

export const FR_DATE_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-admin-import',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: FrDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: FR_DATE_FORMATS },
  ],
  templateUrl: './admin-import.html',
  styleUrl: './admin-import.scss',
})
export class AdminImport implements AfterViewChecked {
  @ViewChild('adminPwd') adminPwd?: ElementRef<HTMLInputElement>;
  private adminPwdFocusFait = false;
  texteColle: string = '';
  saison: string = '';
  anneeDebut: number = 0;
  anneesDisponibles: number[] = [];
  enCours: boolean = false;
  resultats: ResultatImport[] = [];
  messageGlobal: string = '';

  // Étape courante : 'equipes', 'dates', 'planning' ou 'permutation'
  etape: 'equipes' | 'dates' | 'planning' | 'permutation' = 'equipes';

  // Dates des journées de la saison
  dates: { journee: number; date: Date | null }[] = [];
  datesMessage: string = '';
  datesEnCours: boolean = false;

  // Nombre de journées attendues = (nb max d'équipes par poule) - 1
  nbEquipesMax: number = 0;

  // Indicateurs de complétion pour colorer les onglets
  equipesRenseignees: boolean = false;
  datesRenseignees: boolean = false;
  championnatRenseigne: boolean = false;

  // Suivi de la saisie des dates (pour l'onglet Dates : vert si complet, rouge sinon)
  nbDatesEnregistrees: number = 0;
  datesCompletesBase: boolean = false;

  // Création du championnat
  championnatMessage: string = '';
  championnatEnCours: boolean = false;

  // Identifiants des comptes équipes créés (email + mot de passe) pour affichage/copie
  identifiantsEquipes: { equipe: string; email: string; motDePasse: string; mailCapitaine: string }[] = [];

  // Planning par club
  clubs: string[] = [];
  clubSelectionne: string = '';
  planningEquipes: { code: number; nom: string }[] = [];
  planningDates: { journee: number; date: string }[] = [];
  planningParDate: Map<string, Map<number, string>> = new Map();
  planningMessage: string = '';
  planningEnCours: boolean = false;

  // Permutation des matchs aller/retour (2 colonnes : Code_Equipe, Numéro de journée)
  textePermutations: string = '';
  permutationMessage: string = '';
  permutationEnCours: boolean = false;

  // Équipes dont le gymnase n'a pas été trouvé (à compléter manuellement)
  gymnasesManquants: {
    equipe: string;
    nomRecherche: string;
    nomGymnase: string;
    adresse: string;
    commune: string;
    x: number | null;
    y: number | null;
    enregistre: boolean;
    erreur: string;
  }[] = [];

  // Connexion admin intégrée
  adminPassword: string = '';
  adminErrorMessage: string = '';
  showAdminPassword: boolean = false;

  constructor(
    private supabase: SupabaseService,
    private globalService: GlobalService,
    private auth: AuthService,
    private supabaseClient: SupabaseClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.saison = this.saisonCourante();
    this.initSaisons();
  }

  ngAfterViewChecked(): void {
    // Place le focus dans le champ mot de passe admin dès qu'il est présent.
    if (!this.adminPwdFocusFait && this.adminPwd) {
      this.adminPwd.nativeElement.focus();
      this.adminPwdFocusFait = true;
    }
  }

  /** Initialise la liste des années et l'année de début par défaut. */
  private async initSaisons(): Promise<void> {
    // Liste des années autour de l'année courante pour la roue.
    const anneeRef = new Date().getFullYear();
    this.anneesDisponibles = [];
    for (let a = anneeRef - 5; a <= anneeRef + 5; a++) {
      this.anneesDisponibles.push(a);
    }

    this.anneeDebut = await this.anneeDebutCourante();

    // S'assure que l'année par défaut figure dans la roue.
    if (!this.anneesDisponibles.includes(this.anneeDebut)) {
      this.anneesDisponibles.push(this.anneeDebut);
      this.anneesDisponibles.sort((a, b) => a - b);
    }

    this.majSaison();
  }

  /** Met à jour la chaîne saison (année-année+1) à partir de l'année de début. */
  majSaison(): void {
    this.saison = `${this.anneeDebut}-${this.anneeDebut + 1}`;
    this.rafraichirEtats();
  }

  /** Met à jour les indicateurs de complétion (onglets verts) pour la saison courante. */
  async rafraichirEtats(): Promise<void> {
    const saison = (this.saison ?? '').trim();
    if (!saison) {
      this.equipesRenseignees = false;
      this.datesRenseignees = false;
      this.championnatRenseigne = false;
      return;
    }

    try {
      const [nbEquipes, nbEquipesMax, dates, nbMatchs] = await Promise.all([
        this.supabase.nbEquipesSaison(saison),
        this.supabase.nbEquipesMaxParPoule(saison),
        this.supabase.chargerDatesMatchs(saison),
        this.supabase.nbMatchsSaison(saison),
      ]);
      this.nbEquipesMax = nbEquipesMax;
      this.nbDatesEnregistrees = dates.length;
      const attendues = nbEquipesMax > 1 ? (nbEquipesMax - 1) * 2 : 0;

      this.equipesRenseignees = nbEquipes > 0;
      // L'onglet Dates n'est vert que si le nombre de dates correspond aux journées attendues
      this.datesCompletesBase = attendues > 0 && dates.length === attendues;
      this.datesRenseignees = this.datesCompletesBase;
      this.championnatRenseigne = nbMatchs > 0;
    } catch (err: any) {
      console.error('Rafraîchissement des états échoué:', err);
    }
  }

  /** Vrai si des dates existent mais en nombre insuffisant (onglet Dates en rouge). */
  get datesIncompletes(): boolean {
    const attendues = this.nbJourneesAttendues;
    return attendues > 0 && this.nbDatesEnregistrees !== attendues;
  }

  /**
   * Extrait le nom de base d'une équipe en retirant le suffixe numérique.
   * Ex: "Cusset -1" => "Cusset", "Sainte-Foy l'Argentière -2" => "Sainte-Foy l'Argentière".
   */
  private nomBaseEquipe(nomEquipe: string): string {
    return (nomEquipe ?? '')
      .trim()
      .replace(/\s*[-–—]\s*\d+\s*$/, '')
      .trim();
  }

  /** Année de début de la saison par défaut : année courante N (saison N-N+1). */
  private async anneeDebutCourante(): Promise<number> {
    // Par défaut : année courante N => saison N-N+1 (ex: 2026-2027).
    return new Date().getFullYear();
  }

  get estConnecteAdmin(): boolean {
    return this.auth.isAdmin;
  }

  toggleShowAdminPassword(): void {
    this.showAdminPassword = !this.showAdminPassword;
  }

  async loginAdmin(): Promise<void> {
    this.adminErrorMessage = '';

    if (!this.adminPassword) {
      this.adminErrorMessage = 'Veuillez saisir le mot de passe administrateur.';
      return;
    }

    try {
      const param = await this.supabase.loginParameter('AdminEmail');
      const adminEmail = (param?.Valeur ?? '').trim();

      if (!adminEmail) {
        this.adminErrorMessage = "Aucun compte administrateur configuré.";
        return;
      }

      // La connexion admin prime : on efface toute session équipe applicative
      // AVANT le signIn pour que la session Supabase (admin) puisse s'établir.
      this.auth.clearSessionEquipe();

      const { error } = await this.supabaseClient.auth.signInWithPassword({
        email: adminEmail,
        password: this.adminPassword,
      });

      if (error) {
        console.error('Erreur de connexion admin:', error);
        this.adminErrorMessage = 'Mot de passe administrateur incorrect.';
        return;
      }

      this.adminPassword = '';

      // Attend que la session admin soit propagée (callback onAuthStateChange async)
      // puis rafraîchit la vue.
      for (let i = 0; i < 20 && !this.auth.isAdmin; i++) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.rafraichirEtats();
      // On force la navigation vers la page Admin (évite de rester sur /poules).
      await this.router.navigate(['admin-import']);
      this.cdr.detectChanges();
    } catch (err: any) {
      console.error('Erreur lors de la connexion admin:', err);
      this.adminErrorMessage = err?.message ?? 'Erreur lors de la connexion administrateur.';
    }
  }

  /** Déduit la saison sportive courante (ex: 2026-2027) selon la date. */
  private saisonCourante(): string {
    const saisonGlobale = this.globalService.getSaison();
    if (saisonGlobale) {
      return saisonGlobale;
    }

    const maintenant = new Date();
    const annee = maintenant.getFullYear();
    // La saison démarre en été (août). Avant août => saison précédente.
    const debut = maintenant.getMonth() >= 7 ? annee : annee - 1;
    return `${debut}-${debut + 1}`;
  }

  /** Parse le tableau collé (séparé par tabulations, une ligne par équipe). */
  private parseLignes(texte: string): LigneImportEquipe[] {
    const lignes: LigneImportEquipe[] = [];
    const rows = texte.split(/\r?\n/).map(r => r.trim()).filter(r => r.length > 0);

    for (const row of rows) {
      const cols = row.split('\t');

      // Ignore une éventuelle ligne d'en-tête
      const premiere = (cols[0] ?? '').trim().toLowerCase();
      if (premiere === 'poule') {
        continue;
      }

      if (cols.length < 9) {
        continue; // ligne incomplète
      }

      lignes.push({
        poule: (cols[0] ?? '').trim(),
        equipe: (cols[1] ?? '').trim(),
        prenomCapitaine: (cols[2] ?? '').trim(),
        nomCapitaine: (cols[3] ?? '').trim(),
        telCapitaine: (cols[4] ?? '').trim(),
        mailCapitaine: (cols[5] ?? '').trim(),
        numeroGymnase: Number((cols[6] ?? '').trim()) || 0,
        jourMatch: (cols[7] ?? '').trim(),
        horaireMatch: (cols[8] ?? '').trim(),
      });
    }

    return lignes;
  }

  async lancerImport(): Promise<void> {
    this.messageGlobal = '';
    this.resultats = [];
    this.gymnasesManquants = [];
    this.identifiantsEquipes = [];

    const saison = (this.saison ?? '').trim();
    if (!saison) {
      this.messageGlobal = 'Veuillez renseigner la saison (ex: 2026-2027).';
      return;
    }

    const lignes = this.parseLignes(this.texteColle);
    if (lignes.length === 0) {
      this.messageGlobal = 'Aucune ligne valide détectée. Collez le tableau (colonnes séparées par des tabulations).';
      return;
    }

    this.enCours = true;

    // Purge préalable : efface équipes et catégories déjà créées pour cette saison
    try {
      const purge = await this.supabase.purgerSaison(saison);
      this.messageGlobal =
        `Purge effectuée : ${purge.equipesSupprimees} équipe(s) et ${purge.categoriesSupprimees} catégorie(s) supprimée(s). `;
    } catch (err: any) {
      this.enCours = false;
      this.messageGlobal = `Échec de la purge : ${err?.message ?? err}`;
      return;
    }

    // Cache des catégories déjà résolues pour éviter les requêtes répétées
    const cacheCategories = new Map<string, number>();

    for (const ligne of lignes) {
      try {
        // 1) Catégorie (A, B, C...) pour la saison
        const clefCat = `${ligne.poule}|${saison}`;
        let codeCategorie = cacheCategories.get(clefCat);
        if (codeCategorie === undefined) {
          codeCategorie = await this.supabase.getOrCreateCategorie(ligne.poule, saison);
          cacheCategories.set(clefCat, codeCategorie);
        }

        // 2) Capitaine (créé si l'email n'existe pas encore)
        const codeCapitaine = await this.supabase.getOrCreateCapitaine(
          ligne.mailCapitaine,
          ligne.prenomCapitaine,
          ligne.nomCapitaine,
          ligne.telCapitaine
        );

        // 3) Gymnase : recherche par le nom de base de l'équipe (ex: "Cusset -1" => "Cusset")
        const nomBase = this.nomBaseEquipe(ligne.equipe);
        let codeGymnase = await this.supabase.trouverGymnaseParEquipe(nomBase);
        if (codeGymnase === null) {
          // Évite les doublons pour un même nom de gymnase à compléter
          if (!this.gymnasesManquants.some(g => g.nomRecherche.toLowerCase() === nomBase.toLowerCase())) {
            this.gymnasesManquants.push({
              equipe: ligne.equipe,
              nomRecherche: nomBase,
              nomGymnase: nomBase,
              adresse: '',
              commune: '',
              x: null,
              y: null,
              enregistre: false,
              erreur: '',
            });
          }
          codeGymnase = 0;
        }

        // 4) Équipe (créée si absente)
        const resultat = await this.supabase.creerEquipeSiAbsente(
          ligne.equipe,
          codeCategorie,
          codeGymnase,
          ligne.jourMatch,
          ligne.horaireMatch,
          codeCapitaine
        );

        this.resultats.push({
          equipe: ligne.equipe,
          statut: resultat.statut,
          message: resultat.statut === 'créée'
            ? `Créée (code ${resultat.codeEquipe}, catégorie ${ligne.poule})`
            : `Déjà existante (code ${resultat.codeEquipe})`,
        });

        // Conserve l'identifiant pour l'onglet Mails :
        // - mot de passe affiché uniquement pour les comptes nouvellement créés,
        // - mail du capitaine conservé même pour les équipes déjà existantes.
        this.identifiantsEquipes.push({
          equipe: ligne.equipe,
          email: `${resultat.codeEquipe}@myapp.local`,
          motDePasse: resultat.statut === 'créée' ? (resultat.motDePasse ?? '') : '',
          mailCapitaine: ligne.mailCapitaine,
        });
      } catch (error: any) {
        this.resultats.push({
          equipe: ligne.equipe,
          statut: 'erreur',
          message: error?.message ?? 'Erreur inconnue',
        });
      }
    }

    this.enCours = false;

    // Met à jour la saison courante dans Params
    try {
      await this.supabase.majParametre('SaisonCourante', saison);
    } catch (err: any) {
      console.error('Mise à jour de la saison dans Params échouée:', err);
    }

    const creees = this.resultats.filter(r => r.statut === 'créée').length;
    const existantes = this.resultats.filter(r => r.statut === 'existante').length;
    const erreurs = this.resultats.filter(r => r.statut === 'erreur').length;
    this.messageGlobal += `Import terminé : ${creees} créée(s), ${existantes} existante(s), ${erreurs} erreur(s).`;

    await this.rafraichirEtats();
  }

  /** Copie la liste des identifiants (équipe, email, mot de passe) dans le presse-papiers. */
  async copierIdentifiants(): Promise<void> {
    if (this.identifiantsEquipes.length === 0) {
      return;
    }
    const entete = 'Équipe\tMot de passe';
    const lignes = this.identifiantsEquipes.map(
      i => `${i.equipe}\t${i.motDePasse}`
    );
    const texte = [entete, ...lignes].join('\n');
    try {
      await navigator.clipboard.writeText(texte);
      this.messageGlobal += ' Identifiants copiés dans le presse-papiers.';
    } catch (err: any) {
      console.error('Copie des identifiants échouée:', err);
    }
  }

  /** Ouvre le client mail avec un brouillon pré-rempli pour le capitaine d'une équipe. */
  envoyerMailCapitaine(id: { equipe: string; email: string; motDePasse: string; mailCapitaine: string }): void {
    if (!id.mailCapitaine) {
      this.messageGlobal += ` Aucune adresse e-mail pour ${id.equipe}.`;
      return;
    }
    const urlConnexion = 'https://alainavenelperso.github.io/Volley/';
    const cc = 'volleyufolep69@free.fr';
    const objet = `Mot de passe de votre équipe "${id.equipe}" – Volley UFOLEP Rhône – saison ${this.saison}`;
    const corps =
      `Bonjour,\n\n` +
      `Voici le mot de passe de votre équipe "${id.equipe}" pour la saison ${this.saison} : ${id.motDePasse}\n\n` +
      `Connexion : ${urlConnexion}\n\n` +
      `Sportivement.`;
    const lien = `mailto:${encodeURIComponent(id.mailCapitaine)}` +
      `?cc=${encodeURIComponent(cc)}` +
      `&subject=${encodeURIComponent(objet)}` +
      `&body=${encodeURIComponent(corps)}`;
    window.location.href = lien;
  }

  /** Enregistre un gymnase manquant saisi manuellement, puis rattache l'équipe. */
  async enregistrerGymnase(index: number): Promise<void> {
    const g = this.gymnasesManquants[index];
    if (!g) {
      return;
    }

    g.erreur = '';

    if (!g.nomGymnase.trim()) {
      g.erreur = 'Le nom du gymnase est obligatoire.';
      return;
    }

    try {
      await this.supabase.creerGymnaseEtRattacher({
        nomEquipe: g.nomRecherche,
        nomGymnase: g.nomGymnase.trim(),
        adresse: g.adresse.trim(),
        commune: g.commune.trim(),
        x: g.x,
        y: g.y,
      });
      g.enregistre = true;
    } catch (err: any) {
      g.erreur = err?.message ?? 'Erreur lors de la sauvegarde du gymnase.';
    }
  }

  /** Vrai si l'import équipes s'est bien passé (aucune erreur, aucun gymnase manquant non traité). */
  get peutSkipperEquipes(): boolean {
    const aucuneErreur = !this.resultats.some(r => r.statut === 'erreur');
    const gymnasesOk = this.gymnasesManquants.every(g => g.enregistre);
    return aucuneErreur && gymnasesOk;
  }

  /** Passe à l'étape de saisie des dates de journées. */
  async allerAuxDates(): Promise<void> {
    this.datesMessage = '';
    this.championnatMessage = '';
    this.etape = 'dates';

    const saison = (this.saison ?? '').trim();
    try {
      this.nbEquipesMax = saison ? await this.supabase.nbEquipesMaxParPoule(saison) : 0;
    } catch (err: any) {
      console.error('Lecture du nombre d\'équipes max échouée:', err);
      this.nbEquipesMax = 0;
    }

    await this.rechargerDates();
  }

  /** Nombre de journées attendues : ((nb max d'équipes par poule) - 1) x 2 (aller/retour). */
  get nbJourneesAttendues(): number {
    return this.nbEquipesMax > 1 ? (this.nbEquipesMax - 1) * 2 : 0;
  }

  /** Nombre de dates effectivement renseignées. */
  get nbDatesRenseignees(): number {
    return this.dates.filter(d => d.date instanceof Date && !isNaN((d.date as Date).getTime())).length;
  }

  /** Vrai si le nombre de dates renseignées correspond au nombre de journées attendues. */
  get datesCompletes(): boolean {
    return this.nbJourneesAttendues > 0 && this.nbDatesRenseignees === this.nbJourneesAttendues;
  }

  /** Recharge les dates enregistrées pour la saison courante depuis la base. */
  private async rechargerDates(): Promise<void> {
    const saison = (this.saison ?? '').trim();
    const attendues = this.nbJourneesAttendues;

    let existantes: { journee: number; date: string }[] = [];
    try {
      existantes = saison ? await this.supabase.chargerDatesMatchs(saison) : [];
    } catch (err: any) {
      console.error('Chargement des dates existantes échoué:', err);
    }

    // Nombre de lignes à afficher : le nombre de journées attendues, sinon les dates existantes.
    const nbLignes = attendues > 0 ? attendues : existantes.length;
    const parJournee = new Map<number, string>();
    for (const e of existantes) {
      parJournee.set(e.journee, e.date);
    }

    this.dates = Array.from({ length: nbLignes }, (_, i) => {
      const journee = i + 1;
      const iso = parJournee.get(journee);
      return { journee, date: iso ? this.isoVersDate(iso) : null };
    });
  }

  /** Convertit une date ISO (YYYY-MM-DD) en objet Date local. */
  private isoVersDate(iso: string): Date | null {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec((iso ?? '').trim());
    if (!m) {
      return null;
    }
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  }

  /** Revient à l'étape des équipes. */
  retourEquipes(): void {
    this.etape = 'equipes';
  }

  /**
   * Date d'ouverture du calendrier pour une journée : la date déjà enregistrée pour cette
   * journée si elle existe, sinon la date de la journée précédente, sinon aujourd'hui.
   */
  dateDebutPour(index: number): Date {
    const courante = this.dates[index]?.date;
    if (courante instanceof Date && !isNaN(courante.getTime())) {
      return courante;
    }
    for (let i = index - 1; i >= 0; i--) {
      const d = this.dates[i]?.date;
      if (d instanceof Date && !isNaN(d.getTime())) {
        return d;
      }
    }
    return new Date();
  }

  /** Retourne le lundi de la semaine de la date fournie. */
  private lundiDeLaSemaine(d: Date): Date {
    const lundi = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const jour = lundi.getDay(); // 0 = dimanche, 1 = lundi, ...
    const decalage = jour === 0 ? -6 : 1 - jour;
    lundi.setDate(lundi.getDate() + decalage);
    return lundi;
  }

  /** Convertit une Date en ISO local (YYYY-MM-DD), ramenée au lundi de la semaine. */
  private dateVersIso(d: Date): string {
    const lundi = this.lundiDeLaSemaine(d);
    const aaaa = lundi.getFullYear();
    const mm = String(lundi.getMonth() + 1).padStart(2, '0');
    const jj = String(lundi.getDate()).padStart(2, '0');
    return `${aaaa}-${mm}-${jj}`;
  }

  /** Enregistre les dates de journées dans DateMatchs pour la saison. */
  async enregistrerDates(): Promise<void> {
    this.datesMessage = '';

    const saison = (this.saison ?? '').trim();
    if (!saison) {
      this.datesMessage = 'Saison non renseignée.';
      return;
    }

    const lignes: { journee: number; date: string }[] = this.dates
      .filter(d => d.date instanceof Date && !isNaN(d.date.getTime()))
      .map(d => ({ journee: d.journee, date: this.dateVersIso(d.date as Date) }));

    if (lignes.length === 0) {
      this.datesMessage = 'Veuillez saisir au moins une date.';
      return;
    }

    // Vérifie que les dates sont strictement croissantes
    for (let i = 1; i < lignes.length; i++) {
      if (lignes[i].date <= lignes[i - 1].date) {
        this.datesMessage =
          `Les dates doivent être dans l'ordre croissant : la journée ${lignes[i].journee} ` +
          `n'est pas postérieure à la journée ${lignes[i - 1].journee}.`;
        return;
      }
    }

    // Contrôle : il faut autant de dates que (nb max d'équipes par poule) - 1
    if (this.nbJourneesAttendues > 0 && lignes.length !== this.nbJourneesAttendues) {
      this.datesMessage =
        `Nombre de dates incorrect : ${lignes.length} saisie(s) pour ${this.nbJourneesAttendues} journée(s) attendue(s) ` +
        `(poule la plus fournie : ${this.nbEquipesMax} équipes).`;
      return;
    }

    this.datesEnCours = true;
    try {
      await this.supabase.enregistrerDatesMatchs(saison, lignes);
      await this.rechargerDates();
      this.datesMessage = `Dates enregistrées : ${lignes.length} journée(s) pour la saison ${saison}.`;
      await this.rafraichirEtats();
    } catch (err: any) {
      this.datesMessage = `Échec de l'enregistrement des dates : ${err?.message ?? err}`;
    } finally {
      this.datesEnCours = false;
    }
  }

  /**
   * Vrai si le championnat peut être créé : dates enregistrées en nombre correct
   * et cohérentes avec le nombre d'équipes des poules.
   */
  get peutCreerChampionnat(): boolean {
    return this.datesCompletes && !this.datesEnCours && !this.championnatEnCours;
  }

  /** Génère le calendrier complet (round-robin aller/retour) pour la saison. */
  async creerChampionnat(): Promise<void> {
    this.championnatMessage = '';

    const saison = (this.saison ?? '').trim();
    if (!saison) {
      this.championnatMessage = 'Saison non renseignée.';
      return;
    }

    if (!this.datesCompletes) {
      this.championnatMessage =
        `Impossible de créer le championnat : il faut ${this.nbJourneesAttendues} date(s) enregistrée(s) ` +
        `(actuellement ${this.nbDatesRenseignees}).`;
      return;
    }

    this.championnatEnCours = true;
    try {
      const nbMatchs = await this.supabase.genererChampionnat(saison);
      this.championnatMessage = `Championnat créé : ${nbMatchs} match(s) générés pour la saison ${saison}.`;
      await this.rafraichirEtats();
    } catch (err: any) {
      this.championnatMessage = `Échec de la création du championnat : ${err?.message ?? err}`;
    } finally {
      this.championnatEnCours = false;
    }
  }

  /** Passe à l'étape planning et charge la liste des clubs + les dates de la saison. */
  async allerAuPlanning(): Promise<void> {
    this.etape = 'planning';
    this.planningMessage = '';

    const saison = (this.saison ?? '').trim();
    try {
      // Recharge toujours les clubs pour refléter la saison sélectionnée
      this.clubs = saison ? await this.supabase.listerClubs(saison) : [];
      this.planningDates = saison ? await this.supabase.chargerDatesMatchs(saison) : [];
    } catch (err: any) {
      this.planningMessage = `Erreur de chargement : ${err?.message ?? err}`;
    }
  }

  /** Passe à l'étape permutation. */
  allerAuxPermutations(): void {
    this.etape = 'permutation';
    this.permutationMessage = '';
  }

  /**
   * Parse le textarea (2 colonnes : Code_Equipe, Numéro de journée) et permute
   * chaque rencontre aller/retour correspondante. Rapporte le résultat ligne par ligne.
   */
  async lancerPermutations(): Promise<void> {
    this.permutationMessage = '';
    const texte = (this.textePermutations ?? '').trim();
    if (!texte) {
      this.permutationMessage = 'Veuillez saisir au moins une ligne (Code_Equipe, Numéro de journée).';
      return;
    }

    const lignes = texte
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(l => l.length > 0);

    this.permutationEnCours = true;
    const resultats: string[] = [];
    try {
      for (const ligne of lignes) {
        const cols = ligne.split(/[\t;,]+/).map(c => c.trim());
        const codeEquipe = Number(cols[0]);
        const numJournee = Number(cols[1]);

        if (!Number.isFinite(codeEquipe) || !Number.isFinite(numJournee)) {
          resultats.push(`❌ « ${ligne} » : format invalide (attendu : Code_Equipe, Numéro de journée).`);
          continue;
        }

        try {
          const msg = await this.supabase.permuterMatchsAllerRetour(codeEquipe, numJournee);
          resultats.push(`✅ ${msg}`);
        } catch (err: any) {
          resultats.push(`❌ Équipe ${codeEquipe}, journée ${numJournee} : ${err?.message ?? err}`);
        }
      }
    } finally {
      this.permutationEnCours = false;
    }

    this.permutationMessage = resultats.join('\n');
  }

  /** Charge le planning (domicile/extérieur) des équipes du club sélectionné. */
  async chargerPlanningClub(): Promise<void> {
    this.planningMessage = '';
    this.planningEquipes = [];
    this.planningParDate = new Map();

    const club = (this.clubSelectionne ?? '').trim();
    if (!club) {
      return;
    }

    this.planningEnCours = true;
    try {
      const saison = (this.saison ?? '').trim();
      const res = await this.supabase.chargerPlanningClub(club, saison);
      this.planningEquipes = res.equipes;
      this.planningParDate = res.parDate;
      if (res.equipes.length === 0) {
        this.planningMessage = `Aucune équipe trouvée pour le club « ${club} ».`;
      }
    } catch (err: any) {
      this.planningMessage = `Erreur : ${err?.message ?? err}`;
    } finally {
      this.planningEnCours = false;
    }
  }

  /** Retourne le lieu ('D'/'E') d'une équipe à une date donnée, ou '' si pas de match. */
  lieuPour(dateIso: string, codeEquipe: number): string {
    return this.planningParDate.get(dateIso)?.get(codeEquipe) ?? '';
  }

  /** Libellé affiché dans la cellule du planning. */
  libelleLieu(lieu: string): string {
    if (lieu === 'D') return 'Domicile';
    if (lieu === 'E') return 'Extérieur';
    return '—';
  }

  /** Formate une date ISO (yyyy-mm-dd) au format jj/mm/aaaa. */
  formatDate(dateIso: string): string {
    if (!dateIso) return '';
    const partie = dateIso.substring(0, 10).split('-');
    if (partie.length !== 3) return dateIso;
    return `${partie[2]}/${partie[1]}/${partie[0]}`;
  }

  /** Nombre de matchs du club à domicile / extérieur pour une journée donnée. Ex : "1 / 2". */
  comptageDomExtJournee(dateIso: string): string {
    let dom = 0;
    let ext = 0;
    for (const e of this.planningEquipes) {
      const lieu = this.lieuPour(dateIso, e.code);
      if (lieu === 'D') dom++;
      else if (lieu === 'E') ext++;
    }
    return `${dom} / ${ext}`;
  }
}
