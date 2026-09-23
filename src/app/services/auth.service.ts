import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseClient, Session, User } from '@supabase/supabase-js';

export interface AppSession {
  user: User | null;
  token: string | null;
  code_equipe: string | null;
  nom_equipe: string | null;
  code_categorie: number | null;
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
    nom_equipe: null,
    code_categorie: null
  });

  constructor(private supabase: SupabaseClient) {
    this.init();
  }

  private async init() {
    // 0) Restaure une éventuelle session équipe applicative (login via Mot2Passe)
    this.restaurerSessionEquipe();

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

  private static readonly CLE_SESSION_EQUIPE = 'sessionEquipe';

  /** Ouvre une session équipe applicative (authentification via Mot2Passe, sans Supabase Auth). */
  setSessionEquipe(equipe: { Code_Equipe: number; Nom_Equipe: string; Code_Categorie: number }): void {
    const session: AppSession = {
      user: null,
      token: null,
      code_equipe: String(equipe.Code_Equipe),
      nom_equipe: equipe.Nom_Equipe,
      code_categorie: equipe.Code_Categorie,
    };
    localStorage.setItem(AuthService.CLE_SESSION_EQUIPE, JSON.stringify({
      Code_Equipe: equipe.Code_Equipe,
      Nom_Equipe: equipe.Nom_Equipe,
      Code_Categorie: equipe.Code_Categorie,
    }));
    this.session$.next(session);
  }

  /** Restaure la session équipe depuis le localStorage si présente. */
  private restaurerSessionEquipe(): void {
    try {
      const brut = localStorage.getItem(AuthService.CLE_SESSION_EQUIPE);
      if (!brut) {
        return;
      }
      const e = JSON.parse(brut);
      this.session$.next({
        user: null,
        token: null,
        code_equipe: String(e.Code_Equipe),
        nom_equipe: e.Nom_Equipe,
        code_categorie: e.Code_Categorie,
      });
    } catch (err) {
      console.error('Restauration de la session équipe échouée:', err);
    }
  }

  /** Ferme la session équipe applicative. */
  clearSessionEquipe(): void {
    localStorage.removeItem(AuthService.CLE_SESSION_EQUIPE);
    this.session$.next({
      user: null,
      token: null,
      code_equipe: null,
      nom_equipe: null,
      code_categorie: null,
    });
  }

  private async updateSession(session: Session | null) {
    if (!session) {
      // Ne pas écraser une session équipe applicative (login via Mot2Passe)
      if (localStorage.getItem(AuthService.CLE_SESSION_EQUIPE)) {
        return;
      }
      this.session$.next({
        user: null,
        token: null,
        code_equipe: null,
        nom_equipe: null,
        code_categorie: null
      });
      //this._currentUser$.next(null);
      return;
    }

    const user = session.user;
    const token = session.access_token;
    const nom = user?.email?.split("@")[0] || "";

    console.log('Session Supabase mise à jour:',  user, user.email, nom );
    console.log('DEBUG admin metadata:', 'user_metadata=', user.user_metadata, 'app_metadata=', (user as any).app_metadata);

    // Si l'utilisateur Supabase n'est pas une équipe (email non numérique, ex. admin)
    // et qu'une session équipe applicative existe, on la conserve (ne pas l'écraser).
    if (!(nom && /^\d+$/.test(nom)) && localStorage.getItem(AuthService.CLE_SESSION_EQUIPE)) {
      console.log('Session admin détectée mais session équipe applicative présente → conservation de la session équipe.');
      return;
    }

    // 3) Charger les infos d'équipe uniquement si l'identifiant est un code équipe numérique
    let equipe: any = null;
    if (nom && /^\d+$/.test(nom)) {
      const { data } = await this.supabase
        .from('Equipes')
        .select('Code_Equipe, Nom_Equipe, Code_Categorie')
        .eq('Code_Equipe', nom)
        .single();
      equipe = data;
    }

    console.log('Équipe chargée pour l\'utilisateur:', equipe);
    this.session$.next({
      user,
      token,
      code_equipe: equipe?.Code_Equipe ?? null,
      nom_equipe: equipe?.Nom_Equipe ?? null,
      code_categorie: equipe?.Code_Categorie ?? null
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

get isAdmin(): boolean {
  const user = this.session$.value.user;
  if (!user) {
    return false;
  }
  return user.user_metadata?.['admin'] === true
    || (user as any).app_metadata?.['admin'] === true;
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
