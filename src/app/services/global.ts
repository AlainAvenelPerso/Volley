// src/app/services/global.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { Categorie, Equipe, Match, TClassement, InfosEquipe } from '../../models/models';     // On peut les merger! 
import { AppMessageService } from './app-message.service';
import { Router } from '@angular/router';
import { environment } from '../../../src/environments/environment';
import { Classement } from '../classement/classement';
import { Resultat } from '../../models/models';
@Injectable({
  providedIn: 'root'   // disponible partout dans l'app
})

export class GlobalService {
  public swipeThreshold: number = 40; // sensibilité (px) pour les swipes
  private SaisonCourante: string = '';    // Saison en cours
  private equipeConnectee: Equipe = new Equipe(0, '', 0, '');              // Equipe connectée
  private isConnected: boolean = false;         // Statut de connexion
  private pouleSelected: number = 0;        // Poule sélectionnée
  private saisonParsed$ = new BehaviorSubject<{ startYear: string; endYear: string }>({ startYear: '', endYear: '' });
  private Categories: Categorie[] = [];
  private Equipes: Equipe[] = [];       // Toutes les équipes pour la saison
  readonly saisonParsed = this.saisonParsed$.asObservable();
  private isConnectedSubject = new BehaviorSubject<boolean>(false);
  readonly isConnected$ = this.isConnectedSubject.asObservable();
  private equipeConnecteeSubject = new BehaviorSubject<Equipe>(new Equipe(0, '', 0, ''));
  readonly equipeConnectee$ = this.equipeConnecteeSubject.asObservable();
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);
  readonly categories$ = this.categoriesSubject.asObservable();
  private equipesSubject = new BehaviorSubject<Equipe[]>([]);
  readonly equipes$ = this.equipesSubject.asObservable();
  private equipesAllSubject = new BehaviorSubject<Equipe[]>([]);   // Toutes équipes pour la saison
  readonly equipesAll$ = this.equipesAllSubject.asObservable();
  private matchsSubject = new BehaviorSubject<Match[]>([]);
  readonly matchs$ = this.matchsSubject.asObservable();
  private scoreMatchSubject = new BehaviorSubject<any>(null);
  readonly scoreMatch$ = this.scoreMatchSubject.asObservable();
  private classementSubject = new BehaviorSubject<TClassement[]>([]);
  readonly classement$ = this.classementSubject.asObservable();
  private informationEquipeSubject = new BehaviorSubject<InfosEquipe | null>(null);
  readonly informationEquipe$ = this.informationEquipeSubject.asObservable();
  private resultatsSubject = new BehaviorSubject<Resultat[]>([]);
  readonly resultats$ = this.resultatsSubject.asObservable();

  constructor(
    private supabase: SupabaseService, private appMessage: AppMessageService, private router: Router
  ) { }


  disconnect(): void {
    this.isConnected = false;
    this.isConnectedSubject.next(this.isConnected);
    this.equipeConnectee = new Equipe(0, '', 0, '');
    this.equipeConnecteeSubject.next(this.equipeConnectee);
    this.appMessage.clear();
    this.router.navigate(['/']);
  }

  loginWithUserAndPassword(username: string, password: string): void {

    console.log('Tentative de connexion Supabase pour', username, this.Categories);
    this.supabase.loginWithQuery(username, password, this.Categories).then((data: any) => {
      console.log('Connexion Global réussie pour', username, data);
      //this.isConnected = true;
      this.equipeConnectee = new Equipe(data.Code_Equipe, data.Nom_Equipe, data.Code_Categorie, data.Categories.Nom_Categorie);
      //this.auth.setConnected(true, this.userId);
      this.isConnected = true;
      this.isConnectedSubject.next(this.isConnected);

      this.appMessage.show(this.equipeConnectee.nom + " (" + this.equipeConnectee.nomCategorie + ")", 0);
      // navigate to poules if connected
      this.router.navigate(['matchs']);
    }).catch((error: any) => {
      console.error('Erreur Supabase:', error.message);
      this.appMessage.show('Erreur: ' + error.message, 5000);
    });
  }

  // Getter pour la saison parsée (retourne les deux années)
  getParsedSaison(): { startYear: string; endYear: string } {
    // Format expected: "2025-2026"
    const parts = this.SaisonCourante.split(/[\/\-]/);
    const parsed = {
      startYear: parts[0]?.trim() || '',
      endYear: parts[1]?.trim() || ''
    };
    // Emit the parsed season to subscribers
    this.saisonParsed$.next(parsed);
    return parsed;
  }
  // Setter
  setSaison(): void {
    this.supabase.loginParameter('SaisonCourante').then((data: any) => {
      this.SaisonCourante = data.Valeur;
      this.getParsedSaison(); // This will now emit the new value to subscribers
      this.supabase.loadCategories(this.SaisonCourante).then((data: any) => {
        this.Categories = data;
        console.log('Catégories chargées dans GlobalService :', this.Categories);
      });
    });
  }

  getSaison(): string { return this.SaisonCourante; }

  loadAllEquipes(): void {
    this.supabase.loadEquipes(this.Categories).then((data: Equipe[]) => {
      this.Equipes = data;
      console.log("GlobalService: toutes les équipes chargées par loadAllEquipes", this.Equipes);
      this.equipesAllSubject.next(data);
      console.log('Equipes chargées dans GlobalService :', data);
    });
  }

  getAllEquipes(): Observable<Equipe[]> {
    return this.equipesAll$;
  }

  loadMatchsEquipe(): void {
    this.supabase.loadMatchsEquipe(this.equipeConnectee.code).then((data: Match[]) => {
      this.matchsSubject.next(data);
      console.log('Matchs chargés dans GlobalService :', data);
    });
  }

  getMatchs(): Observable<Match[]> {
    return this.matchs$;
  }

  loadScoreMatch(Lieu: string, CodeAdversaire: number): void {
    if (Lieu == "D")
      this.supabase.loadScoreMatch(this.equipeConnectee.code, CodeAdversaire).then((data: any) => {
        console.log('Score chargé dans GlobalService :', data);
        this.scoreMatchSubject.next(data);
        // Traiter les données du score ici si nécessaire
      });
    else
      this.supabase.loadScoreMatch(CodeAdversaire, this.equipeConnectee.code).then((data: any) => {
        console.log('Score chargé dans GlobalService :', data);
        this.scoreMatchSubject.next(data);
        // Traiter les données du score ici si nécessaire
      });
  }

  getScoreMatch(): Observable<any> {
    return this.scoreMatch$;
  }
  // Getter
  getEquipeConnecteeO(): Observable<Equipe> {
    return this.equipeConnectee$;
  }
  getEquipeConnectee(): Equipe {
    return this.equipeConnectee;
  }

  getIsConnected(): Observable<boolean> {
    return this.isConnected$;
  }

  initEquipeConnectee(): void {
    this.equipeConnectee = new Equipe(0, '', 0, ''); // réinitialiser
  }


  loadCategories(saison: string): void {
    this.supabase.loadCategories(saison).then((data: Categorie[]) => {
      this.categoriesSubject.next(data);
      console.log('Catégories chargées dans GlobalService :', data);
    });
  }

  getCategories(): Observable<Categorie[]> {
    return this.categories$;
  }

  getNomCategorie(codeCategorie: number): string {
    const categorie = this.Categories.find(cat => cat.codeCategorie === codeCategorie);
    return categorie ? categorie.nomCategorie : '';
  }

  // Chargement des équipes du club
  loadEquipes(): void {
    this.supabase.loadEquipesClub(this.equipeConnectee.nom, this.Categories).then((data: Equipe[]) => {
      this.equipesSubject.next(data);
      console.log('Equipes chargées dans GlobalService pour :', this.equipeConnectee.nom, data);
    });
  }

  getEquipes(): Observable<Equipe[]> {
    return this.equipes$;
  }

  // On sauvegarde la poule en venant de la page Poule
  setPouleSelected(poule: number): void {
    this.pouleSelected = poule;
  }

  // On consomme la poule sélectionnée quand on vient de la page poule, on remet la valeur à null après
  getPouleSelected(): number {
    const poule = this.pouleSelected;
    this.pouleSelected = 0;
    return poule;
  }

  loadEquipesPoule(codeCategorie: number): void {
    console.log("GlobalService: affiche les équipes déjà chargées", this.Equipes);
    if (this.Equipes.length == 0) {
      console.log("GlobalService: rien de charger... on charge toutes les équipes");
      this.loadAllEquipes();
    }
  }

  logDebug(...args: any[]) {
    if (!environment.production) {
      console.log(...args);
    }
  }

  enregistrerScoreMatch(Lieu: string, ED: number, EE: number, Score: number[], sets: number[][]): void {
    this.logDebug('GlobalService: enregistrerScoreMatch', ED, EE, sets);
    this.supabase.enregistrerScoreMatch(Lieu, ED, EE, Score, sets).then(() => {
      console.log('Score enregistré avec succès');
    });
  }

  chargeClassementCategorie(codeCategorie: number): Promise<any> {
    return this.supabase.chargeClassementCategorie(codeCategorie).then((data: TClassement[]) => {
      this.classementSubject.next(data);
      console.log('Classement chargé dans GlobalService :', data);
    });
  }


  getClassementCategorie(): Observable<TClassement[]> {
    console.log('GlobalService: getClassementCategorie appelé', this.classement$);
    return this.classement$;
  }

  informationEquipe(codeEquipe: number) {
    this.supabase.informationEquipe(codeEquipe).then((data: InfosEquipe | null) => {
      this.informationEquipeSubject.next(data);
      console.log('Information équipe chargée dans GlobalService :', data);

    });

  }

  getInfoEquipe(): Observable<InfosEquipe | null> {
    return this.informationEquipe$;
  }

  loadResultats(codeCategorie: number){
    this.supabase.loadResultats(codeCategorie).then((data: Resultat[]) => {
      this.resultatsSubject.next(data);
      console.log('Résultats chargés dans GlobalService :', data);
    });
  }

  getResultats(): Observable<Resultat[]> {
    return this.resultats$;
  }
}
