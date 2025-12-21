import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Match } from '../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppMessageService } from '../services/app-message.service';

@Component({
  selector: 'app-matchs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matchs.html',
  styleUrl: './matchs.scss',
})
export class Matchs {
  matchs$!: Observable<Match[]>;
  page = 0;


      constructor(public router: Router, private globalService: GlobalService) { }

     ngOnInit(): void {
      if (this.globalService.getEquipeConnectee().code !== 0)
        {       // load teams for the club
        this.globalService.loadMatchsEquipe();
        this.matchs$ = this.globalService.getMatchs();

        console.log("Matchs :", this.matchs$);
        }
     }

     trackByComposite(Lieu: string, CodeAdversaire: number): string {
      return `${Lieu}-${CodeAdversaire}`;
    }

      onSwipeLeft() {
    this.page = Math.min(this.page + 1, 1); // 2 pages max
  }

  onSwipeRight() {
    this.page = Math.max(this.page - 1, 0);
  }

}
