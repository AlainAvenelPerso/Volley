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
  swipeThreshold: number; // sensibilité (px)
  showHelp = false;

  constructor(public router: Router, private globalService: GlobalService, private dialogService: DialogService) {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
  }

  ngOnInit(): void {
    if (this.globalService.getEquipeConnectee().code !== 0) {       // load teams for the club
      this.globalService.loadMatchsEquipe();
      this.matchs$ = this.globalService.getMatchs();

      console.log("Matchs :", this.matchs$);
    }
    else console.log("Aucune équipe connectée !");
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
    //console.log("Pointer up detected", this.startX);
  }

  @HostListener('window:pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {
    //const deltaX = Math.abs(event.clientX - this.startX);
    const deltaX = event.clientX - this.startX;
    //console.log("Pointer up detected", deltaX);
    if (deltaX > this.swipeThreshold) {
      //console.log('Swipe gauche détecté');
      this.router.navigate(['/classement']);
    }
    if (deltaX < -this.swipeThreshold) {
      //console.log('Swipe droite détecté');
      this.router.navigate(['/resultats']);
    }
  }


}
