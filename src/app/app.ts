import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMessageService } from './services/app-message.service';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global';
import { SupabaseService } from './services/supabase.service';
import { Equipe } from '../models/models';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AppSession } from './services/auth.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { filter, take } from 'rxjs/operators';
import { SupabaseClient } from '@supabase/supabase-js';
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
 // isConnected$!: import('rxjs').Observable<boolean>;
  saisonParsed$!: import('rxjs').Observable<{ startYear: string; endYear: string }>;
  session$!: Observable<AppSession>;
teamName$!: Observable<string | null>;

  constructor(private appMessage: AppMessageService, 
    private auth: AuthService, 
    private router: Router, 
    private globalService: GlobalService, 
    private supabase: SupabaseClient) {
    this.message$ = this.appMessage.message$;
    //this.isConnected$ = this.auth.isConnected$;
    //this.isConnected$ = this.globalService.getIsConnected();
    //console.log("App initialized, checking season...", this.isConnected$);
    this.saisonParsed$ = this.globalService.saisonParsed;
    this.globalService.setSaison(); // Initialiser la saison au démarrage de l'application


    //this.session$ = this.auth.sessionChanges$;
    this.session$ = this.auth.session$;
 this.teamName$ = this.auth.session$.pipe( map(s => s.nom_equipe), distinctUntilChanged() );


    //this.router.navigate(['poules']);
    //this.router.navigate(['resultats']);
    //this.router.navigate(['info-equipe']);
    //this.router.navigate(['classement']);
    //this.router.navigate(['matchs']);
    //this.router.navigate(['detailmatch/D/1116/Luzinay - 2']);   // Test detail match
    
  }

async ngOnInit(): Promise<void> {
      //const session = await this.supabaseService.getSession();
this.auth.sessionChanges$
  .pipe(
    filter(s => !!s.code_equipe), // équipe connectée
    take(1)                       // ne navigue qu'une seule fois
  )
  .subscribe(s => {
    console.log("Équipe connectée :", s.nom_equipe);
    this.router.navigate(['matchs']);
  });

this.auth.sessionChanges$
  .pipe(
    filter(s => s.code_equipe == null), // équipe connectée
    take(1)                       // ne navigue qu'une seule fois
  )
  .subscribe(s => {
    console.log("Pas d'équipe connectée !");
    this.router.navigate(['poules']);
  });


      //console.log('Session Supabase au démarrage de l\'application:', session);
              //const user =  await   this.supabaseService.getUser();
        // console.log('Utilisateur actuel:', user);
        // if (user) 
        //   this.router.navigate(['matchs']);
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
async disconnect() {
  await this.supabase.auth.signOut();

  // // Reset global state
  // this.user$.next(null);
  // this.team$.next(null);
  // this.params$.next(null);

  // // Optionnel : si tu as un loader ou un state "ready"
  // this.sessionReady$.next(false);

  // Redirection
  this.router.navigate(['/poules']);      // On retourne à la page des poules
}

}


