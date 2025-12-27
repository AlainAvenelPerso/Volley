import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global';
import { InfosEquipe } from '../models/models';

@Component({
  selector: 'app-info-equipe',
  imports: [],
  templateUrl: './info-equipe.html',
  styleUrl: './info-equipe.scss',
})

export class InfoEquipe implements AfterViewInit {
  private map!: L.Map;
  private equipeCode: number = 0;
  //infoEquipe$!: Observable<InfosEquipe | null>;
  InfoEquipe: InfosEquipe | null = null;

  constructor(private globalService: GlobalService, public router: Router) {
    const state = history.state as { codeEquipe: number };

    console.log('InfoEquipe initialized with CodeEquipe:', state?.codeEquipe);
    this.equipeCode = state.codeEquipe;
  }

    ngOnInit(): void {

    if (this.equipeCode != 0)     // On va afficher les équipes d'une poule
    {
      this.globalService.logDebug(this.constructor.name, "chargement des équipes pour la poule ", this.equipeCode);
      this.globalService.informationEquipe(this.equipeCode);
      this.globalService.getInfoEquipe().subscribe(data => {
        this.InfoEquipe = data;
        this.globalService.logDebug(this.constructor.name, "InfoEquipe chargées:", this.InfoEquipe);
        const center: L.LatLngExpression = [this.InfoEquipe?.gymnase.Y || 0, this.InfoEquipe?.gymnase.X || 0];
        this.map.setView(center, 13);
        const marker = L.marker(center).addTo(this.map);
        setTimeout(() => {
  this.map.invalidateSize();
}, 50);

      } );
     
    }
  }

  callNumber() { window.location.href = 'tel:' + this.InfoEquipe?.capitaine.TelPortable; }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const center: L.LatLngExpression = [0, 0];
    //console.log('Initialisation de la carte au centre:', center);
    this.map = L.map('map', {
      center,
      zoom: 13,
    });

    // Fond de carte (tu peux changer d’URL de tiles si tu veux)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // // Exemple de marqueur
    // const marker = L.marker(center).addTo(this.map);
    // marker.bindPopup('Ici, c’est le centre de la carte.').openPopup();
  }
}