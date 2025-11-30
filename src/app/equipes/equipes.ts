import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Equipe } from '../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppMessageService } from '../services/app-message.service';

@Component({
  selector: 'app-equipes',
  imports: [CommonModule],
  templateUrl: './equipes.html',
  styleUrl: './equipes.scss',
})
export class Equipes {
  equipes$!: Observable<Equipe[]>;

    constructor(private appMessage: AppMessageService, public router: Router, private globalService: GlobalService) { }

     ngOnInit(): void {
      if (this.globalService.getEquipeConnectee().code !== 0)
        {       // load teams for the club
        this.globalService.loadEquipes();
        this.equipes$ = this.globalService.getEquipes();
        console.log("Equipes du club:", this.equipes$);
        }
      else
        {   // Load teams for the selected poule
        this.appMessage.show(this.globalService.getPouleSelected(), 0);
        }
     }

}
