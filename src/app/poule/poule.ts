import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global';
import { Categorie } from '../../models/models';
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

  buttonsCategories: Categorie[] = [];

  constructor(public router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.loadCategories("2025-2026");
    this.categories$ = this.globalService.getCategories();
    console.log("Catégories dans Poule:", this.categories$);
  }

  goEquipes(cat: Categorie): void {
    console.log('Catégorie sélectionnée :', cat);
    this.globalService.setPouleSelected(cat.codeCategorie);      // Important pour cacher le paramètre et survivre au refresh
    this.router.navigate(['equipes']);
  }
}
