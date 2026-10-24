import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMessageService } from '../services/app-message.service';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { Equipe } from '../../models/models';
import { CommonModule } from '@angular/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthService } from '../services/auth.service';
import { SupabaseService } from '../services/supabase.service';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-identification',
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: './identification.html',
  styleUrls: ['./identification.scss'],

})
export class IdentificationComponent {
  code_equipe: string = '';
  password: string = '';
  loginErrorMessage: string = '';
  isLoadingEquipes: boolean = true;
  isConnected = false;
  showPassword: boolean = false;
  userID$!: Observable<string>;
  equipesAll$!: Observable<Equipe[]>;

  // Mode admin
  modeAdmin: boolean = false;
  adminPassword: string = '';
  adminErrorMessage: string = '';

  constructor(
    private appMessage: AppMessageService,
    private globalService: GlobalService,
    private router: Router,
    private supabase: SupabaseClient,
    private supabaseService: SupabaseService,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
    // Réinitialise les champs pour éviter toute valeur résiduelle (ex. autofill navigateur après déconnexion).
    this.code_equipe = '';
    this.password = '';
    if (this.globalService.getEquipeConnectee().code == 0) {       // load teams
      this.globalService.loadAllEquipes();
      this.equipesAll$ = this.globalService.getAllEquipes().pipe(
        tap((equipes) => this.isLoadingEquipes = equipes.length === 0)
      );
      console.log("Equipes ", this.equipesAll$);
    }
  }

      // Fonctionne mais je vais le remplacer par une connexion via Supabase
  // async loginWithSupabase(): Promise<void> {
  //   if (!this.code_equipe || !this.password) {
  //     this.appMessage.show('Veuillez remplir les champs utilisateur et mot de passe.', 3000);
  //     return;
  //   }

  //   console.log('Tentative de connexion avec loginWithUsername pour', this.code_equipe);
  //   // this.supabase.loginWithUsername("1121@myapp.local", "123456").then((user) => {
  //   //   console.log('Utilisateur connecté avec Supabase test auth:', user);
  //   // });
  //   // this.supabase.auth.signInWithPassword({ email: "1121@myapp.local", password: "123456" }).then((user) => {
  //   //   console.log('Utilisateur connecté avec Supabase test auth:', user);
  //   // });
  //   // if (this.globalService.loginWithUserAndPassword(this.username, this.password) != null) {
  //   //   this.isConnected = true;
  //   //   this.appMessage.show(this.username, 0);
  //   // }
  // }
        // Connexion via Supabase, à remplacer par la fonction ci-dessus
    async loginSupabase(): Promise<void> {
      this.loginErrorMessage = '';

      if (!this.code_equipe || !this.password) {
        this.loginErrorMessage = 'Veuillez remplir les champs utilisateur et mot de passe.';
        this.appMessage.show(this.loginErrorMessage, 3000);
        return;
      }

      console.log('Tentative de connexion équipe pour', this.code_equipe);

      try {
        const equipe = await this.supabaseService.loginEquipe(
          Number(this.code_equipe),
          this.password
        );

        if (!equipe) {
          this.loginErrorMessage = 'Identifiant ou mot de passe incorrect.';
          this.appMessage.show(this.loginErrorMessage, 3000);
          return;
        }

        // Ouvre une session équipe applicative (sans Supabase Auth)
        this.auth.setSessionEquipe(equipe);
        this.router.navigate(['/matchs']);
      } catch (err: any) {
        console.error('Erreur de connexion équipe:', err);
        this.loginErrorMessage = 'Erreur lors de la connexion.';
        this.appMessage.show(this.loginErrorMessage, 3000);
      }
    }

  clearLoginError(): void {
    if (this.loginErrorMessage) {
      this.loginErrorMessage = '';
    }
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleModeAdmin(): void {
    this.modeAdmin = !this.modeAdmin;
    this.adminErrorMessage = '';
    this.adminPassword = '';
  }

  async loginAdmin(): Promise<void> {
    this.adminErrorMessage = '';

    if (!this.adminPassword) {
      this.adminErrorMessage = 'Veuillez saisir le mot de passe administrateur.';
      return;
    }

    try {
      // L'email de l'admin est stocké dans la table Params (clé "AdminEmail")
      const param = await this.supabaseService.loginParameter('AdminEmail');
      const adminEmail = (param?.Valeur ?? '').trim();

      if (!adminEmail) {
        this.adminErrorMessage = "Aucun compte administrateur configuré.";
        return;
      }

      const { error } = await this.supabase.auth.signInWithPassword({
        email: adminEmail,
        password: this.adminPassword,
      });

      if (error) {
        console.error('Erreur de connexion admin:', error);
        this.adminErrorMessage = 'Mot de passe administrateur incorrect.';
        return;
      }

      // On efface toute session équipe applicative pour laisser primer la session admin.
      this.auth.clearSessionEquipe();

      // Attend que la session admin soit propagée (onAuthStateChange est asynchrone)
      // avant de naviguer, sinon la redirection globale renvoie vers /poules.
      for (let i = 0; i < 30 && !this.auth.isAdmin; i++) {
        await new Promise(r => setTimeout(r, 100));
      }

      this.router.navigate(['/admin-import']);
    } catch (err: any) {
      console.error('Erreur lors de la connexion admin:', err);
      this.adminErrorMessage = err?.message ?? 'Erreur lors de la connexion administrateur.';
    }
  }


  async disconnect() {
    console.log('Déconnexion de', this.code_equipe);
    this.isConnected = false;
    this.auth.clearSessionEquipe();
    await this.supabase.auth.signOut();
    // Clear persistent footer message on disconnect
    this.appMessage.clear();
  }
}
