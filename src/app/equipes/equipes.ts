import { Component } from '@angular/core';
import { GlobalService } from '../services/global';
import { Router } from '@angular/router';
import { Equipe } from '../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppMessageService } from '../services/app-message.service';
import { map, tap } from 'rxjs/operators';

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
    const pouleSelectionnee = this.globalService.getPouleSelected()
    if (pouleSelectionnee != 0)     // On va afficher les équipes d'une poule
    {
      this.globalService.logDebug("chargement des équipes pour la poule ", pouleSelectionnee);
      this.globalService.loadEquipesPoule(pouleSelectionnee);
      this.equipes$ = this.globalService.getEquipes().pipe(
        tap (equipes => {
          this.globalService.logDebug("Equipes chargées avant filtrage:", equipes);
        }),
        map(equipes => equipes.filter(item => item.codeCategorie === pouleSelectionnee)),
        tap(filteredEquipes => {
          this.globalService.logDebug("Equipes filtrées pour la poule ", pouleSelectionnee, ":", filteredEquipes);
        })
      );

      //console.log("Equipes de la poule:", this.equipes$);
    }
    if (this.globalService.getEquipeConnectee().code !== 0) {       // load teams for the club
      this.globalService.loadEquipes();
      this.equipes$ = this.globalService.getEquipes();
      console.log("Equipes du club:", this.equipes$);
    }
    // else
    //   {   // Load teams for the selected poule
    //   this.appMessage.show(this.globalService.getPouleSelected(), 0);
    //   }
  }

}
