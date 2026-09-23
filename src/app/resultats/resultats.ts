import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Resultat } from '../../models/models';
import { Observable } from 'rxjs';
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
  lastX = 0;
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

  // 1) Toujours initialiser resultats$ en premier
  this.resultats$ = this.globalService.getResultats().pipe(
    tap(resultats => {
      console.log("Résultats bruts :", resultats);

      if (!Array.isArray(resultats) || resultats.length === 0) {
        console.warn("Aucun résultat reçu → en attente de données");
        return;
      }

      const min = Math.min(...resultats.map(r => r.Equipe_Domicile));
      const max = Math.max(...resultats.map(r => r.Equipe_Domicile));
      const nombreColonnes = max - min + 1;

      const mapping: Record<number, number> = {};
      for (let i = 0; i < nombreColonnes; i++) {
        mapping[min + i] = i + 1;
      }

      const inverseMapping: Record<number, number> = {};
      for (const key in mapping) {
        inverseMapping[mapping[key]] = Number(key);
      }
      this.inverseMapping = inverseMapping;

      this.colonnes = Array.from({ length: nombreColonnes }, (_, i) => i + 1);
      console.log("Colonnes générées :", this.colonnes);

      this.equipesMap = {};
      for (const r of resultats) {
        const nom = r.Nom_Equipe;

        if (!this.equipesMap[nom]) {
          this.equipesMap[nom] = {
            Nom_Equipe: nom,
            index: mapping[r.Equipe_Domicile],
            codeEquipe: Number(r.Equipe_Domicile),
            valeurs: {},
            SD: 0,
            SE: 0
          };
        }

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

  console.log("Resultats observable set up:", this.resultats$);

  // 2) Ensuite seulement, on charge les résultats
  this.auth.session$.pipe(take(1)).subscribe(session => {
    if (session.code_equipe) {
      console.log("Une équipe est connectée :", session.nom_equipe);

      // On s'abonne à toutes les émissions (le tap reconstruit le tableau à chaque mise à jour).
      this.resultats$.subscribe();

      // Puis on (re)charge les résultats à jour.
      this.globalService.loadResultats(session.code_categorie ?? 0);
    } else {
      console.log("Aucune équipe connectée");
    }
  });
}





  trackByComposite(ED: number, EE: number): string {
    return `${ED}-${EE}`;
  }

  /** Nombre de matchs joués (une cellule hors diagonale renseignée par match). */
  get nbMatchsJoues(): number {
    let total = 0;
    for (const ligne of this.lignesTableau) {
      for (const col of this.colonnes) {
        if (col !== ligne.index && ligne.valeurs?.[col]) {
          total++;
        }
      }
    }
    return total;
  }

  /** Ouvre la fiche d'une équipe depuis la colonne "Équipe". */
  ouvrirEquipe(ligne: any): void {
    const codeEquipe = ligne?.codeEquipe ?? this.inverseMapping[ligne?.index];
    console.log('Résultats: ouvrirEquipe', ligne, codeEquipe);
    if (!codeEquipe) return;
    this.router.navigate(['info-equipe'], {
      state: {
        codeEquipe,
        codeCategorie: this.auth.current.code_categorie ?? 0,
        fromClub: false,
      },
    });
  }

  onCellClick(indexLigne: number, indexColonne: number, valeur: string): void {

    const ED = this.inverseMapping[indexLigne];   // vrai numéro équipe ligne
    const EE = this.inverseMapping[indexColonne]; // vrai numéro équipe colonne

    console.log("VRAIS numéros :", ED, EE, indexLigne, indexColonne, this.lignesTableau);

    this.router.navigate(['/detailmatch'], { state: { ED: ED, EE: EE, NED: this.lignesTableau[indexLigne - 1]?.Nom_Equipe, NEE: this.lignesTableau[indexColonne - 1]?.Nom_Equipe } });
  }

  @HostListener('window:pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    this.startX = event.clientX;
    this.lastX = event.clientX;
  }

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    this.lastX = event.clientX;
  }

  @HostListener('window:pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {
    this.evaluerSwipe(event.clientX);
  }

  @HostListener('window:pointercancel', ['$event'])
  onPointerCancel(event: PointerEvent) {
    this.evaluerSwipe(this.lastX);
  }

  private evaluerSwipe(finX: number) {
    const deltaX = finX - this.startX;
    if (deltaX > this.swipeThreshold) {
      this.router.navigate(['/matchs']);
    }
    if (deltaX < -this.swipeThreshold) {
      this.router.navigate(['/classement']);
    }
  }


}
