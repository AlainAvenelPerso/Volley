import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Match } from '../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppMessageService } from '../services/app-message.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-matchs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matchs.html',
  styleUrl: './matchs.scss',
})
export class Matchs {
  matchs$!: Observable<Match[]>;
  startX = 0;
  swipeThreshold = 40; // sensibilité (px)

  constructor(public router: Router, private globalService: GlobalService) { }

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

  @HostListener('window:pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    this.startX = event.clientX;
    console.log("Pointer up detected", this.startX);
  }

  @HostListener('window:pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {
    const deltaX = Math.abs(event.clientX - this.startX);
    console.log("Pointer up detected", deltaX);
    if (deltaX > this.swipeThreshold) {
      console.log('Swipe gauche détecté');
      this.router.navigate(['/classement']);
    }
  }


}
