// src/app/services/global.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { Categorie, Equipe, Match } from '../models/models';     // On peut les merger! 
import { AppMessageService } from './app-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'   // disponible partout dans l'app
})

export class GlobalService {

  private SaisonCourante: string = '';    // Saison en cours
  private CodeCatégorieInf: number = 0;     // Borne inférieure des catégories pour la Saison Courante
  private CodeCatégorieSup: number = 0;     // Borne supérieure des catégories pour la Saison Courante
  private equipeConnectee: Equipe = new Equipe(0, '', 0, '');              // Equipe connectée
  private isConnected: boolean = false;         // Statut de connexion
  private pouleSelected: string = '';        // Poule sélectionnée
  private saisonParsed$ = new BehaviorSubject<{ startYear: string; endYear: string }>({ startYear: '', endYear: '' });
  private Categories: Categorie[] = [];
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
      this.equipesAllSubject.next(data);
      console.log('Equipes chargées dans GlobalService :',  data);
    });
  }

  getAllEquipes(): Observable<Equipe[]> {
    return this.equipesAll$;
  }

  loadMatchsEquipe(): void {
    this.supabase.loadMatchsEquipe(this.equipeConnectee.code).then((data: Match[]) => {
      this.matchsSubject.next(data);
      console.log('Matchs chargés dans GlobalService :',  data);
    });
  }

  getMatchs(): Observable<Match[]> {
    return this.matchs$;
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

  loadEquipes(): void {
    this.supabase.loadEquipesClub(this.equipeConnectee.nom, this.Categories).then((data: Equipe[]) => {
      this.equipesSubject.next(data);
      console.log('Equipes chargées dans GlobalService pour :', this.equipeConnectee.nom, data);
    });
  }

  getEquipes(): Observable<Equipe[]> {
    return this.equipes$;
  }

  setPouleSelected(poule: string): void {
    this.pouleSelected = poule;
  }

  getPouleSelected(): string {
    return this.pouleSelected;
  }
}
