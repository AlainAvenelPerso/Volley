import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMessageService } from './services/app-message.service';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global';
import { SupabaseService } from './services/supabase.service';
import { Equipe } from './models/models';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, MatDialogModule ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})


export class App {
  protected readonly title = signal('volley');
  username = '';
  password = '';
  message$!: import('rxjs').Observable<string | null>;
  isConnected$!: import('rxjs').Observable<boolean>;
  saisonParsed$!: import('rxjs').Observable<{ startYear: string; endYear: string }>;

  constructor(private appMessage: AppMessageService, private auth: AuthService, private router: Router, private globalService: GlobalService, private supabaseService: SupabaseService) {
    this.message$ = this.appMessage.message$;
    //this.isConnected$ = this.auth.isConnected$;
    this.isConnected$ = this.globalService.getIsConnected();
    console.log("App initialized, checking season...", this.isConnected$);
    this.saisonParsed$ = this.globalService.saisonParsed;
    this.globalService.setSaison(); // Initialiser la saison au démarrage de l'application


    this.router.navigate(['']);
    //this.router.navigate(['classement']);
    //this.router.navigate(['matchs']);
    //this.router.navigate(['detailmatch/D/1116/Luzinay - 2']);   // Test detail match
    
  }




 

  // Méthode pour fermer le menu
  closeMenu() {
    //console.log("Fermeture du menu");
  const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = false;
  }
}

  // Déconnexion depuis le menu
  disconnect() {
    this.globalService.disconnect();
  }

}


