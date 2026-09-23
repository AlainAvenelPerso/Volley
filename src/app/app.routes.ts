import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./poule/poule').then(m => m.Poule),
	},
	{
		path: 'connexion',
		loadComponent: () => import('./identification/identification').then(m => m.IdentificationComponent),
	},
	{
		path: 'poules',
		loadComponent: () => import('./poule/poule').then(m => m.Poule),
	},
	{
		path: 'club',
		loadComponent: () => import('./equipes/equipes').then(m => m.Equipes),
	},
	{
		path: 'equipes',
		loadComponent: () => import('./equipes/equipes').then(m => m.Equipes),
	}
	,
	{
		path: 'matchs',
		loadComponent: () => import('./matchs/matchs').then(m => m.Matchs),
	},
	{
		path: 'detailmatch',
		loadComponent: () => import('./detail-match/detail-match').then(m => m.DetailMatch),
	},
	{
		path: 'classement',
		loadComponent: () => import('./classement/classement').then(m => m.Classement),
	},
	{
		path: 'info-equipe',
		loadComponent: () => import('./info-equipe/info-equipe').then(m => m.InfoEquipe),
	},
	{
		path: 'resultats',
		loadComponent: () => import('./resultats/resultats').then(m => m.Resultats),
	},

	{
		path: 'planning-club',
		loadComponent: () => import('./planning-club/planning-club').then(m => m.PlanningClub),
	},
	{
		path: 'calendrier',
		loadComponent: () => import('./calendrier/calendrier').then(m => m.CalendrierPage),
	},
	{
		path: 'admin-import',
		loadComponent: () => import('./admin-import/admin-import').then(m => m.AdminImport),
	},

	// add other routes here
];
