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

@Component({
  selector: 'app-resultats',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private globalService: GlobalService, public router: Router) {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
  }

  ngOnInit(): void {
    console.log("Resultats page initialized");
    this.globalService.loadResultats(96);


    this.resultats$ = from(this.globalService.getResultats()).pipe(
      tap(resultats => {
        console.log("Résultats bruts :", resultats);



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
              valeurs: {}
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
    this.resultats$.subscribe();

    console.log("Resultats observable set up:", this.resultats$);
  }




  trackByComposite(ED: number, EE: number): string {
    return `${ED}-${EE}`;
  }

  onCellClick(indexLigne: number, indexColonne: number): void {

    const ED = this.inverseMapping[indexLigne];   // vrai numéro équipe ligne
    const EE = this.inverseMapping[indexColonne]; // vrai numéro équipe colonne

    console.log("VRAIS numéros :", ED, EE);

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
