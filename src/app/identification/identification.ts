import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMessageService } from '../services/app-message.service';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipe } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-identification',
  imports: [FormsModule, CommonModule],
  templateUrl: './identification.html',
  styleUrls: ['./identification.scss'],

})
export class IdentificationComponent {
  username: string = '';
  password: string = '';
  isConnected = false;
  userID$!: Observable<string>;
  equipesAll$!: Observable<Equipe[]>;

  constructor(
    private appMessage: AppMessageService,
    private globalService: GlobalService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.globalService.getEquipeConnectee().code == 0) {       // load teams
      this.globalService.loadAllEquipes();
      this.equipesAll$ = this.globalService.getAllEquipes();
      console.log("Equipes ", this.equipesAll$);
    }
  }

  async loginWithSupabase(): Promise<void> {
    if (!this.username || !this.password) {
      this.appMessage.show('Veuillez remplir les champs utilisateur et mot de passe.', 3000);
      return;
    }


    if (this.globalService.loginWithUserAndPassword(this.username, this.password) != null) {
      this.isConnected = true;
      this.appMessage.show(this.username, 0);
    }
  }

  async disconnect() {
    console.log('Déconnexion de', this.username);
    this.isConnected = false;
    this.globalService.initEquipeConnectee();
    //this.auth.setConnected(false);
    // Clear persistent footer message on disconnect
    this.appMessage.clear();
  }
}
