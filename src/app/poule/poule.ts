import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global';
import { Categorie } from '../models/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poule',
  imports: [CommonModule],
  templateUrl: './poule.html',
  styleUrl: './poule.scss',
})
export class Poule {
categories$!: Observable<Categorie[]>;
  
//   buttons = [
//   { label: 'Accueil', route: '/home' },
//   { label: 'Profil', route: '/profile' },
//   { label: 'Paramètres', route: '/settings' }
// ];

  buttonsCategories: Categorie[]= [];

  constructor(public router: Router, private globalService: GlobalService) { }

    ngOnInit(): void {
    this.globalService.loadCategories("2025-2026");
    this.categories$ = this.globalService.getCategories();
     console.log("Catégories dans Poule:", this.categories$);
  }

    goEquipes(cat: Categorie): void {
    console.log('Catégorie sélectionnée :', cat);
    this.globalService.setPouleSelected(cat.nomCategorie);
    this.router.navigate(['equipes']);
  }
}
