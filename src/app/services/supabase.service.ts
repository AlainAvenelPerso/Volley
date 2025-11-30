import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../environments/environment';
import * as crypto from 'crypto-js';
import { min } from 'rxjs';
import { Categorie, Equipe } from '../models/models';


@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Initialize Supabase client with credentials from environment
    this.supabase = createClient(
      supabase.supabaseUrl,
      supabase.supabaseKey
    );
    //console.log('Supabase client initialized', supabase.supabaseUrl, supabase.supabaseKey);
  }

   async loginParameter(parameter: string) {
    try {
      // Hash the password with SHA256
      console.log('Récupération du paramètre Supabase pour', parameter);
      
      const { data, error } = await this.supabase
        .from('Params')
        .select('Valeur')
        .eq('Nom', parameter)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          throw new Error('Paramètre non trouvé.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('Paramètre récupéré : ', data);
        return data;
      }
      
      throw new Error('Paramètre non trouvé.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async borneCategorie(saison: string, fAscending: boolean): Promise<number> {
    try {
      // Hash the password with SHA256
      console.log('Récupération des bornes des catégories pour la saison', saison);
      
      const { data, error } = await this.supabase
        .from('Categories')
          .select('Code_Categorie')
          .eq('Saison', saison)
          .order('Code_Categorie', { ascending: fAscending })
          .limit(1);
      
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          throw new Error('borneCategorie non trouvée.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('Categorie : ', fAscending, data[0].Code_Categorie);
        return data[0].Code_Categorie; 
      }
      
      throw new Error('borneCategorie non trouvée.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  // async waitUntilDefined<T>(getter: () => T | undefined | null, interval = 100): Promise<T> {
  //   return new Promise<T>((resolve) => {
  //     const timer = setInterval(() => {
  //       const value = getter();
  //       if (value !== undefined && value !== null) {
  //         clearInterval(timer);
  //         resolve(value);
  //       }
  //     }, interval);
  //   });
  // }
  

   async loadCategories(saison: string): Promise<Categorie[]> {
    // console.log('loadCategories called with saison:', saison);
    // const saisonValide = await this.waitUntilDefined(() => this.gl);
    // console.log('loadCategories called with saison récup :', saison);
    try {
      // Hash the password with SHA256
      console.log('Récupération des catégories pour la saison', saison);
      
      const { data, error } = await this.supabase
        .from('Categories')
          .select('Code_Categorie, Nom_Categorie')
          .eq('Saison', String(saison))
          .order('Code_Categorie', { ascending: true });

      
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          throw new Error('Catégories non trouvées.');
        }
        throw new Error(error.message);
      }
      


    if (data) {
      console.log('Données des catégories récupérées : ', data);
      // Mapper les résultats Supabase vers ta classe Categorie
      const categories = data.map(
        (row: any) => new Categorie(row.Code_Categorie, row.Nom_Categorie)
      );
      console.log('Catégories chargées :', categories);
      return categories;
    }

    throw new Error('Catégories non trouvées.');
  } catch (error: any) {
    console.error('Erreur Supabase:', error.message);
    throw error;
  }
  }

  async loginWithQuery(username: string, password: string, categories: Categorie[] = []) {
    try {
      // Hash the password with SHA256
      const passwordHash = crypto.SHA256(password).toString();
      
      console.log('Tentative de connexion Supabase pour', username, passwordHash);
      
      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from('Equipes')
        .select(`Code_Equipe, Nom_Equipe, Code_Categorie,   Categories (
      "Nom_Categorie"
    ) `)
        .eq('Nom_Equipe', username)
        .eq('Mot2Passe', passwordHash)
        .gte('Code_Categorie', Math.min(...categories.map(c => c.codeCategorie)))
        .lte('Code_Categorie', Math.max(...categories.map(c => c.codeCategorie)))
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Identifiant ou mot de passe incorrect.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('Connexion Supabase réussie pour', username, data);
        return data;
      }
      
      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  }

  async getCurrentUser() {
    const { data: { user } } = await this.supabase.auth.getUser();
    return user;
  }

  async loadEquipesClub(equipe: string, categories: Categorie[] = []): Promise<Equipe[]> {
    try {

      const club = equipe.split(" - ")[0]; 

      console.log('Récupération des équipes du club pour le club', club);
      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from('Equipes')
        .select(`Nom_Equipe, Code_Equipe, Code_Categorie, Categories ("Nom_Categorie") `)
        .ilike('Nom_Equipe', club + ' - %')
        .gte('Code_Categorie', Math.min(...categories.map(c => c.codeCategorie)))
        .lte('Code_Categorie', Math.max(...categories.map(c => c.codeCategorie)))
        .order('Nom_Equipe', { ascending: true });
        
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Problème lors de la récupération des équipes du club.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('data equipes du club', data);
        const equipes = data.map(
        (row: any) => new Equipe(row.Code_Equipe, row.Nom_Equipe, row.Code_Categorie, row.Categories.Nom_Categorie)
      );
        return equipes;
      }
      
      throw new Error('Problème lors de la récupération des équipes du club.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

async loadEquipes(categories: Categorie[]): Promise<Equipe[]> {
    try {


      console.log('Récupération des équipes de la saison');
      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from('Equipes')
        .select(`Nom_Equipe, Code_Equipe, Code_Categorie, Categories ("Nom_Categorie") `)
        .gte('Code_Categorie', Math.min(...categories.map(c => c.codeCategorie)))
        .lte('Code_Categorie', Math.max(...categories.map(c => c.codeCategorie)))
        .order('Nom_Equipe', { ascending: true });
        
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Problème lors de la récupération des équipes du club.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('Equipes', data);
        const equipes = data.map(
        (row: any) => new Equipe(row.Code_Equipe, row.Nom_Equipe, row.Code_Categorie, row.Categories.Nom_Categorie)
      );
        return equipes;
      }
      
      throw new Error('Problème lors de la récupération des équipes.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

    async loadMatchsEquipe(equipe: number) {
    try {
      console.log('Récupération des matchs pour l\'équipe', equipe);
      
      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from('MatchsEquipe')
        .select('Lieu, Adversaire, Date, SetsPour, SetsContre')
        .eq('EquipeChoisie', equipe)
        .order('Date', { ascending: true });
      
      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Identifiant ou mot de passe incorrect.');
        }
        throw new Error(error.message);
      }
      
      if (data) {
        console.log('Matchs récupérés pour l\'équipe', equipe, data);
        return data;
      }
      
      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

}
