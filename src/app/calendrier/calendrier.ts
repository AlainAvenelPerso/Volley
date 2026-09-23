import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { GlobalService } from '../services/global';
import { AuthService } from '../services/auth.service';
import {
  Calendrier,
  CalendrierEquipe,
  CalendrierJournee,
} from '../../models/models';

type SemaineColonne = {
  lundi: Date;                       // lundi de la semaine
  moisIndex: number;                 // index du mois (pour regrouper l'en-tête)
  journee: CalendrierJournee | null; // journée jouée cette semaine (ou null)
  etat: 'passee' | 'courante' | 'future';
};

type MoisEntete = {
  libelle: string;
  span: number;
};

@Component({
  selector: 'app-calendrier-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendrier.html',
  styleUrl: './calendrier.scss',
})
export class CalendrierPage {
  equipes: CalendrierEquipe[] = [];
  semaines: SemaineColonne[] = [];
  mois: MoisEntete[] = [];
  chargement = false;
  message = '';

  private readonly nomsMois = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
  ];

  constructor(
    public router: Router,
    private supabase: SupabaseService,
    private globalService: GlobalService,
    private auth: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    const codeCategorie = this.auth.current.code_categorie;
    if (!codeCategorie) {
      this.message = 'Aucune poule associée à votre équipe.';
      return;
    }

    this.chargement = true;
    try {
      const cal: Calendrier = await this.supabase.chargerCalendrierCategorie(codeCategorie);
      this.equipes = cal.equipes;
      this.construireSemaines(cal.journees);
    } catch (err: any) {
      this.message = `Erreur : ${err?.message ?? err}`;
    } finally {
      this.chargement = false;
    }
  }

  /** Construit une colonne par semaine depuis le premier lundi jusqu'au dernier. */
  private construireSemaines(journees: CalendrierJournee[]): void {
    const valides = journees.filter(j => !!j.date);
    if (valides.length === 0) {
      this.semaines = [];
      this.mois = [];
      return;
    }

    const journeeParLundi = new Map<string, CalendrierJournee>();
    for (const j of valides) {
      journeeParLundi.set(this.cleLundi(this.lundiDe(new Date(j.date))), j);
    }

    const premiers = valides.map(j => this.lundiDe(new Date(j.date)).getTime());
    const debut = this.lundiDe(new Date(Math.min(...premiers)));
    const fin = this.lundiDe(new Date(Math.max(...premiers)));

    const lundiCourant = this.lundiDe(new Date());
    const cleCourante = this.cleLundi(lundiCourant);

    const semaines: SemaineColonne[] = [];
    const curseur = new Date(debut);
    while (curseur.getTime() <= fin.getTime()) {
      const cle = this.cleLundi(curseur);
      let etat: 'passee' | 'courante' | 'future' = 'future';
      if (cle === cleCourante) etat = 'courante';
      else if (curseur.getTime() < lundiCourant.getTime()) etat = 'passee';

      semaines.push({
        lundi: new Date(curseur),
        moisIndex: curseur.getMonth(),
        journee: journeeParLundi.get(cle) ?? null,
        etat,
      });

      curseur.setDate(curseur.getDate() + 7);
    }

    this.semaines = semaines;
    this.mois = this.regrouperMois(semaines);
  }

  /** Regroupe les semaines consécutives d'un même mois pour l'en-tête. */
  private regrouperMois(semaines: SemaineColonne[]): MoisEntete[] {
    const entetes: MoisEntete[] = [];
    for (const s of semaines) {
      const libelle = this.nomsMois[s.moisIndex];
      const dernier = entetes[entetes.length - 1];
      if (dernier && dernier.libelle === libelle) {
        dernier.span += 1;
      } else {
        entetes.push({ libelle, span: 1 });
      }
    }
    return entetes;
  }

  /** Retourne le lundi de la semaine d'une date donnée. */
  private lundiDe(date: Date): Date {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const jour = (d.getDay() + 6) % 7; // 0 = lundi
    d.setDate(d.getDate() - jour);
    return d;
  }

  private cleLundi(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  /** Appariement affiché dans une cellule de semaine (ex : "1/3"). */
  libelleRencontres(semaine: SemaineColonne): { dom: number; ext: number }[] {
    if (!semaine.journee) return [];
    return semaine.journee.rencontres.map(r => ({ dom: r.domicile, ext: r.exterieur }));
  }

  /** Jour (nombre) du lundi, pour la ligne "du". */
  jourLundi(semaine: SemaineColonne): number {
    return semaine.lundi.getDate();
  }

  /** Jour (nombre) du dimanche, pour la ligne "au". */
  jourDimanche(semaine: SemaineColonne): number {
    const d = new Date(semaine.lundi);
    d.setDate(d.getDate() + 6);
    return d.getDate();
  }

  /** Ouvre une adresse de gymnase dans Google Maps. */
  ouvrirMaps(equipe: CalendrierEquipe): void {
    const gym = equipe.gymnase;
    if (!gym) return;
    const requete = encodeURIComponent(`${gym.Adresse} ${gym.Commune}`.trim());
    window.open(`https://www.google.com/maps/search/?api=1&query=${requete}`, '_blank');
  }
}
