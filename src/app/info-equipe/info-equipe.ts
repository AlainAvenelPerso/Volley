import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global';
import { InfosEquipe } from '../../models/models';

const iconRetinaUrl = 'assets/leaflet/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/marker-icon.png';
const shadowUrl = 'assets/leaflet/marker-shadow.png';

const DefaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

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
  sameCategory: boolean = false;          // Est-ce la même catégorie que l'équipe connectée?
  centerMap!: L.LatLngExpression; // Coordonnées pour centrer la carte
  private mapInitialized = false;

  constructor(private globalService: GlobalService, public router: Router) {
    const state = history.state as { codeEquipe: number, codeCategorie: number };

    console.log('InfoEquipe initialized with CodeEquipe:', state, state?.codeEquipe, state?.codeCategorie);
    this.equipeCode = state.codeEquipe;
  }

  ngOnInit(): void {

    if (this.equipeCode != 0)     // On va afficher les infos d'une équipe
    {
      this.globalService.logDebug(this.constructor.name, "chargement des informations de l'équipe ", this.equipeCode);
      this.globalService.informationEquipe(this.equipeCode);
      this.globalService.getInfoEquipe().subscribe(data => {
        if (!data) return; // ignore le premier null

        this.InfoEquipe = data;
        this.globalService.logDebug(this.constructor.name, "InfoEquipe chargées:", this.InfoEquipe);
        this.centerMap = [this.InfoEquipe?.gymnase.Y || 0, this.InfoEquipe?.gymnase.X || 0];
        //this.map.setView(center, 13);


 // Empêche plusieurs initialisations 
        if (!this.mapInitialized) { 
          this.initMap(); 
          this.mapInitialized = true; 
        }

        if (this.InfoEquipe?.Code_Categorie == this.globalService.getEquipeConnectee().codeCategorie)
          this.sameCategory = true;
        else
          this.sameCategory = false;


        // setTimeout(() => {
        //   this.map.invalidateSize();
        // }, 50);

      });

    }
  }

  callNumber() { window.location.href = 'tel:' + this.InfoEquipe?.capitaine.TelPortable; }

  ngAfterViewInit(): void {
    
  }

  private initMap(): void {
    //const center: L.LatLngExpression = [0, 0];
    console.log('Initialisation de la carte avec centre:', this.centerMap);
    this.map = L.map('map').setView(this.centerMap, 13);
            const marker = L.marker(this.centerMap).addTo(this.map);
    //console.log('Initialisation de la carte au centre:', center);
    

    // Fond de carte (tu peux changer d’URL de tiles si tu veux)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // // Exemple de marqueur
    // const marker = L.marker(center).addTo(this.map);
    // marker.bindPopup('Ici, c’est le centre de la carte.').openPopup();
  }

  openMail() {
    window.location.href = 'mailto:' + this.InfoEquipe?.capitaine?.Mail1;
  }
}