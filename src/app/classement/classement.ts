import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Observable } from 'rxjs';
import { TClassement } from '../../models/models';
import { CommonModule } from '@angular/common';
import { Matchs } from '../matchs/matchs';
import { Router, RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '../services/dialog.service';
import { AuthService } from '../services/auth.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-classement',
  imports: [CommonModule, MatIconModule],
  templateUrl: './classement.html',
  styleUrl: './classement.scss',
})
export class Classement {
  Classement$!: Observable<TClassement[]>;
  classement: TClassement[] = [];
  startX = 0;
  lastX = 0;
  swipeThreshold: number; // sensibilité (px)
  constructor(private globalService: GlobalService, private router: Router, private dialogService: DialogService, private auth: AuthService) {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
  }

  ngOnInit(): void {
    this.Classement$ = this.globalService.getClassementCategorie();

    this.Classement$.subscribe(c => {
      this.classement = c;
    });

    // Charge le classement de la catégorie de l'équipe connectée.
    this.auth.session$.pipe(
      filter(session => session.code_categorie != null),
      take(1)
    ).subscribe(session => {
      this.globalService.chargeClassementCategorie(session.code_categorie!);
    });
  }

  /** Nombre total de matchs joués par l'ensemble des équipes du classement. */
  get totalMatchsJoues(): number {
    return this.classement.reduce((somme, c) => somme + (c.nbJoues ?? 0), 0);
  }

  /** Nombre de matchs distincts joués (chaque match compte pour 2 équipes). */
  get nbMatchsDistincts(): number {
    return Math.floor(this.totalMatchsJoues / 2);
  }

  afficheAide() {
    this.dialogService.confirm(
      'Légende',
      `Pts : Points<br>
       J : Matchs joués<br>
       G : Matchs gagnés<br>
       P : Matchs perdus<br>
       GAS : Goal Average par Sets<br>
       GAP : Goal Average par Points<br>
       F : Forfaits<br>
       <br>
       Match gagné : 2 points<br>
       Match perdu : 1 point<br>
       Forfait : 0 point`,
      true
    );
  }

  /** Ouvre la fiche d'une équipe du classement. */
  ouvrirEquipe(codeEquipe: number): void {
    if (!codeEquipe) return;
    this.router.navigate(['info-equipe'], {
      state: {
        codeEquipe,
        codeCategorie: this.auth.current.code_categorie ?? 0,
        fromClub: false,
      },
    });
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
      this.router.navigate(['/resultats']);
    }
    if (deltaX < -this.swipeThreshold) {
      this.router.navigate(['/matchs']);
    }
  }

}
