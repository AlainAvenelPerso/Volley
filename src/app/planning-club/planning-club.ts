import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global';
import { AuthService } from '../services/auth.service';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-planning-club',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planning-club.html',
  styleUrl: './planning-club.scss',
})
export class PlanningClub {
  club: string = '';
  saison: string = '';
  chargement: boolean = false;
  message: string = '';

  planningEquipes: { code: number; nom: string }[] = [];
  planningDates: { journee: number; date: string }[] = [];
  private planningParDate: Map<string, Map<number, string>> = new Map();

  constructor(
    public router: Router,
    private globalService: GlobalService,
    private auth: AuthService,
    private supabase: SupabaseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.saison = (this.globalService.getSaison() ?? '').trim();
    const nomEquipe = this.auth.current.nom_equipe ?? '';
    this.club = this.prefixeClub(nomEquipe);

    if (!this.club || !this.saison) {
      this.message = 'Aucun club connecté.';
      return;
    }

    this.chargement = true;
    try {
      this.planningDates = await this.supabase.chargerDatesMatchs(this.saison);
      const res = await this.supabase.chargerPlanningClub(this.club, this.saison);
      this.planningEquipes = res.equipes;
      this.planningParDate = res.parDate;
      if (res.equipes.length === 0) {
        this.message = `Aucune équipe trouvée pour le club « ${this.club} ».`;
      }
    } catch (err: any) {
      this.message = `Erreur : ${err?.message ?? err}`;
    } finally {
      this.chargement = false;
    }
  }

  /** Extrait le préfixe du club à partir d'un nom d'équipe (ex : "Millery - 1" => "Millery"). */
  private prefixeClub(nomEquipe: string): string {
    return (nomEquipe ?? '').replace(/\s*[-–—]\s*\d+\s*$/, '').trim();
  }

  /** Retourne le lieu ('D'/'E') d'une équipe à une date donnée, ou '' si pas de match. */
  lieuPour(dateIso: string, codeEquipe: number): string {
    return this.planningParDate.get(dateIso)?.get(codeEquipe) ?? '';
  }

  /** Libellé affiché dans la cellule du planning. */
  libelleLieu(lieu: string): string {
    if (lieu === 'D') return 'Domicile';
    if (lieu === 'E') return 'Extérieur';
    return '—';
  }

  /** Formate une date ISO (yyyy-mm-dd) au format jj/mm/aaaa. */
  formatDate(dateIso: string): string {
    if (!dateIso) return '';
    const partie = dateIso.substring(0, 10).split('-');
    if (partie.length !== 3) return dateIso;
    return `${partie[2]}/${partie[1]}/${partie[0]}`;
  }

  /** Nombre de matchs du club à domicile / extérieur pour une journée donnée. Ex : "1 / 2". */
  comptageDomExtJournee(dateIso: string): string {
    let dom = 0;
    let ext = 0;
    for (const e of this.planningEquipes) {
      const lieu = this.lieuPour(dateIso, e.code);
      if (lieu === 'D') dom++;
      else if (lieu === 'E') ext++;
    }
    return `${dom} / ${ext}`;
  }
}
