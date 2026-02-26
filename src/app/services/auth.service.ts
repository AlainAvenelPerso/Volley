import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseClient, Session, User } from '@supabase/supabase-js';

export interface AppSession {
  user: User | null;
  token: string | null;
  code_equipe: string | null;
  nom_equipe: string | null;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isConnected$ = new BehaviorSubject<boolean>(false);
  //private _currentUser$ = new BehaviorSubject<string | null>(null);

  readonly isConnected$ = this._isConnected$.asObservable();
  //readonly currentUser$ = this._currentUser$.asObservable();

  
  public session$ = new BehaviorSubject<AppSession>({
    user: null,
    token: null,
    code_equipe: null,
    nom_equipe: null
  });

  constructor(private supabase: SupabaseClient) {
    this.init();
  }

  private async init() {
    // 1) Récupération initiale
    const { data: { session } } = await this.supabase.auth.getSession();
    await this.updateSession(session);

    // 2) Écoute des changements (login, logout, refresh)
    this.supabase.auth.onAuthStateChange(async (_, session) => {
      await this.updateSession(session);

      console.log('Changement de session détecté:', session);
      //const nom = session?.user?.user_metadata?['nom_equipe'] ?? null; this._currentUser$.next(nom);
    });
  }

  private async updateSession(session: Session | null) {
    if (!session) {
      this.session$.next({
        user: null,
        token: null,
        code_equipe: null,
        nom_equipe: null
      });
      //this._currentUser$.next(null);
      return;
    }

    const user = session.user;
    const token = session.access_token;
    const nom = user?.email?.split("@")[0] || "";

    console.log('Session Supabase mise à jour:',  user, user.email, nom );
    // 3) Charger les infos d'équipe
    const { data: equipe } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe, Nom_Equipe')
      .eq('Code_Equipe', nom)
      .single();

    console.log('Équipe chargée pour l\'utilisateur:', equipe);
    this.session$.next({
      user,
      token,
      code_equipe: equipe?.Code_Equipe ?? null,
      nom_equipe: equipe?.Nom_Equipe ?? null
    });

    //this._currentUser$.next(user?.email || null);
  }

  get sessionChanges$() {
    return this.session$.asObservable();
  }

  get current() {
    return this.session$.value;
  }

get currentCodeEquipe(): number {
  return this.session$.value.code_equipe ? parseInt(this.session$.value.code_equipe) : 0;
}



  // setConnected(connected: boolean, username?: string) {
  //   this._isConnected$.next(connected);
  //   if (connected && username) {
  //     this._currentUser$.next(username);
  //   } else {
  //     this._currentUser$.next(null);
  //   }
  // }

  isConnected(): boolean {
    return this._isConnected$.getValue();
  }

  // getCurrentUser(): string | null {
  //   return this._currentUser$.getValue();
  // }
}
