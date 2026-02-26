import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMessageService } from '../services/app-message.service';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipe } from '../../models/models';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase.service';
import { SupabaseClient } from '@supabase/supabase-js';
@Component({
  selector: 'app-identification',
  imports: [FormsModule, CommonModule],
  templateUrl: './identification.html',
  styleUrls: ['./identification.scss'],

})
export class IdentificationComponent {
  code_equipe: string = '';
  password: string = '';
  isConnected = false;
  userID$!: Observable<string>;
  equipesAll$!: Observable<Equipe[]>;

  constructor(
    private appMessage: AppMessageService,
    private globalService: GlobalService,
    private router: Router,
    private supabase: SupabaseClient
  ) {

  }

  ngOnInit(): void {
    if (this.globalService.getEquipeConnectee().code == 0) {       // load teams
      this.globalService.loadAllEquipes();
      this.equipesAll$ = this.globalService.getAllEquipes();
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
      //console.log('Tentative de connexion avec Supabase pour', this.code_equipe);
      //this.appMessage.show('Veuillez remplir les champs utilisateur et mot de passe.', 3000);
    if (!this.code_equipe || !this.password) {
      this.appMessage.show('Veuillez remplir les champs utilisateur et mot de passe.', 3000);
      return;
    }

    console.log('Tentative de connexion avec loginWithUsername pour', this.code_equipe);

    this.supabase.auth.signInWithPassword({ email: this.code_equipe + "@myapp.local", password: this.password }).then(({ data, error }) => {
       if (error) { 
        console.error("Erreur de connexion :", error.message); 
        this.appMessage.show('Utilisateur ou mot de passe incorrect.', 3000);
        return; 
      }
       console.log('Utilisateur connecté avec Supabase test auth:', data.user);
       this.router.navigate(['/matchs']);
    });
  }


  async disconnect() {
    console.log('Déconnexion de', this.code_equipe);
    this.isConnected = false;
    this.globalService.initEquipeConnectee();
    //this.auth.setConnected(false);
    // Clear persistent footer message on disconnect
    this.appMessage.clear();
  }
}
