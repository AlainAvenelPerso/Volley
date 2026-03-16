import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Resultat } from '../../models/models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppSession } from '../services/auth.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-resultats',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './resultats.html',
  styleUrl: './resultats.scss',
})
export class Resultats {
  resultats$!: Observable<any[]>;
  //colonnes = ["Sets_Domicile", "Sets_Exterieur"];
  colonnes: number[] = [];
  equipesMap: Record<string, any> = {};
  lignesTableau: any[] = [];
  inverseMapping: Record<number, number> = {};
  startX = 0;
  swipeThreshold: number; // sensibilité (px)

  constructor(
    private globalService: GlobalService, 
    public router: Router,
    private auth: AuthService) 
    {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
  }

  ngOnInit(): void {
    console.log("Resultats page initialized");
        this.auth.session$.pipe(take(1)).subscribe(session => {
      if (session.code_equipe) {
        console.log("Une équipe est connectée :", session.nom_equipe);
        this.globalService.loadResultats(session.code_categorie ?? 0);     // DEBUG a corriger
      } else {
        console.log("Aucune équipe connectée");
      }
    });
    

    // Recharge immédiatement à l'arrivée sur la page 
    

this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe((event: NavigationEnd) => {
    if (event.urlAfterRedirects === '/resultats') {
      this.globalService.loadResultats(96);
    }
  });


    this.resultats$ = this.globalService.getResultats().pipe(
      tap(resultats => {
        console.log("Résultats bruts :", resultats);

 if (!Array.isArray(resultats) || resultats.length === 0) { console.warn("Aucun résultat reçu → en attente de données"); return; }
 
        const min = Math.min(...resultats.map(r => r.Equipe_Domicile));
        const max = Math.max(...resultats.map(r => r.Equipe_Domicile));

        const nombreColonnes = max - min + 1;
        // Mapping : 1099 → 1, 1100 → 2, etc.
        const mapping: Record<number, number> = {};
        for (let i = 0; i < nombreColonnes; i++) {
          mapping[min + i] = i + 1;
        }

        const inverseMapping: Record<number, number> = {};
        for (const key in mapping) {
          inverseMapping[mapping[key]] = Number(key);
        }
        this.inverseMapping = inverseMapping;


        // Colonnes = 1, 2, 3, 4...
        this.colonnes = Array.from({ length: nombreColonnes }, (_, i) => i + 1);

        console.log("Colonnes générées :", this.colonnes);

        // Regroupement par équipe
        this.equipesMap = {};

        for (const r of resultats) {
          const nom = r.Nom_Equipe;

          if (!this.equipesMap[nom]) {
            this.equipesMap[nom] = {
              Nom_Equipe: nom,
              index: mapping[r.Equipe_Domicile],
              valeurs: {},
              SD: 0,
              SE: 0
            };
          }

          // On garde les vraies colonnes internes (1099, 1100...)
          if (r.Sets_Domicile != null && r.Sets_Exterieur != null) {
            this.equipesMap[nom].valeurs[mapping[r.Equipe_Domicile]] =
              `${r.Sets_Domicile}-${r.Sets_Exterieur}`;

            this.equipesMap[nom].valeurs[mapping[r.Equipe_Exterieure]] =
              `${r.Sets_Domicile}-${r.Sets_Exterieur}`;
          }
        }

        this.lignesTableau = Object.values(this.equipesMap);
      })


    );
    this.resultats$.subscribe();      // Besoin de ça pour déclencher le tap et voir les logs, sinon le tableau reste vide en attendant les données

    console.log("Resultats observable set up:", this.resultats$);
  }




  trackByComposite(ED: number, EE: number): string {
    return `${ED}-${EE}`;
  }

  onCellClick(indexLigne: number, indexColonne: number, valeur: string): void {

    const ED = this.inverseMapping[indexLigne];   // vrai numéro équipe ligne
    const EE = this.inverseMapping[indexColonne]; // vrai numéro équipe colonne

    console.log("VRAIS numéros :", ED, EE, valeur);

    this.router.navigate(['/detailmatch'], { state: { ED: ED, EE: EE } });
  }

  @HostListener('window:pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    this.startX = event.clientX;
    console.log("Pointer up detected", this.startX);
  }

  @HostListener('window:pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {
    const deltaX = event.clientX - this.startX;
    console.log("Pointer up detected", deltaX);
    if (deltaX > this.swipeThreshold) {
      console.log('Swipe gauche détecté');
      this.router.navigate(['/matchs']);
    }
    if (deltaX < -this.swipeThreshold) {
      console.log('Swipe droite détecté');
      this.router.navigate(['/classement']);
    }
  }


}
