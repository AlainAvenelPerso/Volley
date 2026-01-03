import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Resultat } from '../models/models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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


  constructor(private globalService: GlobalService, public router: Router) {

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
        valeurs: {}
      };
    }

    // On garde les vraies colonnes internes (1099, 1100...)
    if (r.Sets_Domicile != null && r.Sets_Exterieur != null) {
    this.equipesMap[nom].valeurs[mapping[r.Equipe_Domicile]]  =
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
}
