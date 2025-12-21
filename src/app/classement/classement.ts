import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Observable } from 'rxjs';
import { TClassement } from '../models/models';
import { CommonModule } from '@angular/common';
import { Matchs } from '../matchs/matchs';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-classement',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './classement.html',
  styleUrl: './classement.scss',
})
export class Classement {
Classement$!: Observable<TClassement[]>;
classement: TClassement[] = [];
page = 0;

  constructor(private globalService: GlobalService, private router: Router) {

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

    onSwipeDown(event: PointerEvent) {
    this.page = Math.min(this.page + 1, 1); // 2 pages max
    console.log('Swipe onSwipeDown detected:', event, this.page);
    this.router.navigate(['/matchs']);
  }

  onSwipeUp(event: PointerEvent) {
    this.page = Math.max(this.page - 1, 0);
    console.log('Swipe onSwipeUp detected:', event, this.page);
    this.router.navigate(['/matchs']);
  }
}
