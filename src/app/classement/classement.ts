import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Observable } from 'rxjs';
import { TClassement } from '../../models/models';
import { CommonModule } from '@angular/common';
import { Matchs } from '../matchs/matchs';
import { Router, RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-classement',
  imports: [CommonModule],
  templateUrl: './classement.html',
  styleUrl: './classement.scss',
})
export class Classement {
  Classement$!: Observable<TClassement[]>;
  classement: TClassement[] = [];
  startX = 0;
  swipeThreshold: number; // sensibilité (px)
  constructor(private globalService: GlobalService, private router: Router) {
    this.swipeThreshold = this.globalService.swipeThreshold;    // récupérer la sensibilité depuis le service global
  }

  ngOnInit(): void {
    this.globalService.chargeClassementCategorie(97);
    this.Classement$ = this.globalService.getClassementCategorie();

    this.Classement$.subscribe(c => {
      console.log('Classement reçu dans le composant:', c);
      this.classement = c;
    });
    console.log('Composant Classement initialisé.', this.classement);
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
      this.router.navigate(['/resultats']);
    }
    if (deltaX < -this.swipeThreshold) {
      console.log('Swipe droite détecté');
      this.router.navigate(['/matchs']);
    }
  }

}
