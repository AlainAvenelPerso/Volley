import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Match } from '../../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogService } from '../services/dialog.service';
import { AppSession, AuthService } from '../services/auth.service';
import { filter, take } from 'rxjs/operators';
@Component({
  selector: 'app-matchs',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './matchs.html',
  styleUrl: './matchs.scss',
})
export class Matchs {
  matchs$!: Observable<Match[]>;
  startX = 0;
  lastX = 0;
  swipeThreshold: number; // sensibilité (px)
  showHelp = false;
  session$!: Observable<AppSession>;
  // Vrai tant que les matchs n'ont pas été chargés (équipe connectée sans match => championnat en cours).
  chargementMatchs = true;

  constructor(
    public router: Router, 
    private globalService: GlobalService, 
    private dialogService: DialogService,
    private auth: AuthService) {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
    this.session$ = this.auth.session$; 
  }

  ngOnInit(): void {
    // On lie l'observable immédiatement pour éviter d'afficher une liste vide.
    this.matchs$ = this.globalService.getMatchs();

    this.auth.session$.pipe(
      filter(session => !!session.code_equipe), // attend qu'une équipe soit connectée
      take(1)
    ).subscribe(session => {
      console.log("Une équipe est connectée :", session.nom_equipe);
      this.chargementMatchs = true;
      this.globalService.loadMatchsEquipe().finally(() => {
        this.chargementMatchs = false;
      });
    });
   }

  trackByComposite(Lieu: string, CodeAdversaire: number): string {
    return `${Lieu}-${CodeAdversaire}`;
  }

  afficheAide() {
    console.log("Affichage de l'aide");
    this.dialogService.confirm(
  'Légende',
  `<span style="color: blue; font-weight: bold;">Bleu</span> : Matchs à domicile<br>
   <span style="color: red; font-weight: bold;">Rouge</span> : Matchs à l'extérieur`,
  true
);

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
      this.router.navigate(['/classement']);
    }
    if (deltaX < -this.swipeThreshold) {
      this.router.navigate(['/resultats']);
    }
  }


}
