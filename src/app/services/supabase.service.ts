import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../environments/environment';
import * as crypto from 'crypto-js';
import { min } from 'rxjs';
import { Categorie, Equipe, InfosEquipe, Joueur } from '../models/models';
import type { Gymnase, TClassement } from '../models/models';


const POINT_GAGNANT = 3;      // 3 points pour une victoire
const POINT_PERDANT = 1       // 1 point pour une défaite

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
        .select('Lieu, CodeAdversaire, Adversaire, Date, SetsPour, SetsContre')
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

  async loadScoreMatch(ED: number, EE: number) {
    try {
      console.log('Récupération du score pour le match', ED, EE);

      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from('Matchs')
        .select('Sets_Domicile, Sets_Exterieur, S1D, S2D, S3D, S4D, S5D, S1E, S2E, S3E, S4E, S5E')
        .eq('Equipe_Domicile', ED)
        .eq('Equipe_Exterieure', EE)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Identifiant ou mot de passe incorrect.');
        }
        throw new Error(error.message);
      }

      if (data) {
        console.log('Score récupéré pour le match', ED, EE, data);
        return data;
      }

      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async enregistrerScoreMatch(Lieu: string, ED: number, EE: number, Score: number[], sets: number[][]): Promise<void> {
    try {
      console.log('Enregistrement du score pour le match', EE, sets);

      const updateData: Record<string, any> = {};

      updateData['Sets_Domicile'] = Score[0];
      updateData['Sets_Exterieur'] = Score[1];

      const today: string = new Date().toISOString().split('T')[0];

      if (Lieu == "D") {
        updateData['VD'] = true;
        updateData['VD_DATE'] = today;
      } else {
        updateData['VE'] = true;
        updateData['VE_DATE'] = today;
      }

      sets.forEach((set, index) => {
        if (set[0] != -1) {       // -1 est utilisé pour indiquer un set non joué
          const setNumber = index + 1;
          updateData[`S${setNumber}D`] = set[0];
          updateData[`S${setNumber}E`] = set[1];
        }
      });

      await this.supabase
        .from('Matchs')
        .update(updateData)
        .eq('Equipe_Domicile', ED)
        .eq('Equipe_Exterieure', EE);

      console.log('Score enregistré avec succès pour le match');
    }
    catch (error: any) {
      console.error('Erreur Supabase lors de l\'enregistrement du score:', error.message);
      throw error;
    }
  }

  async informationEquipe(codeEquipe: number): Promise<InfosEquipe | null> {
    try {
      console.log('Récupération des informations pour l\'équipe', codeEquipe);

      const { data, error } = await this.supabase
        .from('Equipes')
        .select(`
            Nom_Equipe,
            Jour_Match,
            Heures_Match,
            Gymnases (
              Nom_Gymnase,
              Adresse,
              Commune,
              X,
              Y
            ),
            Joueurs (
              Nom,
              Prenom,
              TelPortable,
              Mail1
            )
          `)
        .eq('Code_Equipe', codeEquipe)
        .single();


      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Identifiant ou mot de passe incorrect.');
        }
        throw new Error(error.message);
      }

      if (data) {
        const capitaine = data.Joueurs as unknown as Joueur;
        const gymnase = data.Gymnases as unknown as Gymnase;
        console.log('InfoEquipe', data, data.Joueurs, data.Gymnases, capitaine, gymnase);

        const infoEquipe: InfosEquipe = {
          Nom_Equipe : data.Nom_Equipe,
          Jour_Match : data.Jour_Match,
          Heures_Match : data.Heures_Match,
          capitaine: {
            Nom: capitaine.Nom,
            Prenom: capitaine.Prenom,
            Mail1: capitaine.Mail1,
            TelPortable: capitaine.TelPortable
          },
          gymnase: {
            Nom_Gymnase: gymnase.Nom_Gymnase,
            Adresse: gymnase.Adresse,
            Commune: gymnase.Commune,
            X: gymnase.X,
            Y: gymnase.Y
          }
        };

        return infoEquipe;
      }



      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async chargeClassementCategorie(CodeCategorie: number) {
    try {
      console.log('Chargement du classement pour la catégorie', CodeCategorie);

      // Query the 'Equipes' table for matching username and password hash
      const { data, error } = await this.supabase
        .from("Equipes")
        .select("Code_Equipe, Nom_Equipe")
        .eq("Code_Categorie", CodeCategorie)
        .order("Code_Equipe");

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Identifiant ou mot de passe incorrect.');
        }
        throw new Error(error.message);
      }

      if (data) {
        console.log('Classement récupéré pour la catégorie', CodeCategorie, data);

        const TabEquipes: TClassement[] = [];

        data.forEach((row) => {
          TabEquipes.push({
            points: 0,
            gas: 0,
            gap: 0,
            codeEquipe: row.Code_Equipe,
            nbJoues: 0,
            nbGagnes: 0,
            nbPerdus: 0,
            nbForfaits: 0,
            penalites: 0,
            nomEquipe: row.Nom_Equipe,
          });
        });

        console.log('Tableau du classement construit :', TabEquipes);

        const Nb = TabEquipes.length;

        for (let i = 0; i < Nb; i++) {
          const equipe = TabEquipes[i].codeEquipe;

          // Récupération des matchs à domicile
          const { data: matchs, error } = await this.supabase
            .from("Matchs")
            .select(
              "Equipe_Exterieure, Sets_Domicile, Sets_Exterieur, S1D, S1E, S2D, S2E, S3D, S3E, S4D, S4E, S5D, S5E"
            )
            .eq("Equipe_Domicile", equipe);

          if (error) {
            console.error("Erreur Supabase :", error);
            continue;
          }

          //console.log('Matchs à domicile récupérés pour l\'équipe', equipe, matchs);
          for (const m of matchs) {
            const EquipExtIndex =
              m.Equipe_Exterieure - m['Equipe_Exterieure'] + Nb - 1;

            const SD = m.Sets_Domicile;
            const SE = m.Sets_Exterieur;

            let deltaPoints = 0;
            let forfait = "";
            const gagnant = this.chercheGagnantPoints(m, "D", "E", (d) => {
              //console.log('Delta points domicile trouvé d:', d);
              deltaPoints = d;
            }, (f) => {
              //console.log('Delta points domicile trouvé f:', f);
              forfait = f;
            });
            //console.log('Gagnant du match:', gagnant, 'forfait:', forfait);
            if (SD !== 0 || SE !== 0) {
              // Match joué
              TabEquipes[i].nbJoues += 1;
              TabEquipes[EquipExtIndex].nbJoues += 1;

              if (gagnant === "D") {
                // Victoire domicile
                TabEquipes[i].points += POINT_GAGNANT;
                TabEquipes[i].gas += SD - SE;
                TabEquipes[i].gap += deltaPoints;
                TabEquipes[i].nbGagnes += 1;

                if (forfait === "E") {
                  TabEquipes[EquipExtIndex].nbForfaits += 1;
                } else {
                  TabEquipes[EquipExtIndex].points += POINT_PERDANT;
                  TabEquipes[EquipExtIndex].nbPerdus += 1;
                }

                TabEquipes[EquipExtIndex].gas -= SD - SE;
                TabEquipes[EquipExtIndex].gap -= deltaPoints;
              } else if (gagnant === "E") {
                // Victoire extérieure
                if (forfait === "D") {
                  TabEquipes[i].nbForfaits += 1;
                } else {
                  TabEquipes[i].points += POINT_PERDANT;
                  TabEquipes[i].nbPerdus += 1;
                }

                TabEquipes[i].gas -= SE - SD;
                TabEquipes[i].gap += deltaPoints;

                TabEquipes[EquipExtIndex].points += POINT_GAGNANT;
                TabEquipes[EquipExtIndex].gas += SE - SD;
                TabEquipes[EquipExtIndex].gap -= deltaPoints;
                TabEquipes[EquipExtIndex].nbGagnes += 1;
              }
            }
          }
        }


        console.log('Tableau du classement mis à jour :', TabEquipes);

        TabEquipes.sort((a, b) => {
          // 1. Trier par points (descendant)
          if (b.points !== a.points) return b.points - a.points;

          // 2. Puis par GAS (descendant)
          if (b.gas !== a.gas) return b.gas - a.gas;

          // 3. Puis par GAP (descendant)
          return b.gap - a.gap;
        });

        console.log('Tableau du classement trié :', TabEquipes);

        return TabEquipes;
      }

      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  chercheGagnantPoints(
    match: any,
    L1: "D" | "E",
    L2: "D" | "E",
    setDeltaPoints: (d: number) => void,
    setForfait: (f: "D" | "E" | "") => void
  ): "D" | "E" | null {
    //console.log('chercheGagnantPoints appelé avec match:', match, L1, L2);
    if (match.Sets_Domicile === null)
      return null; // Pas de score, pas de gagnant
    let PD = 0; // Points domicile
    let PE = 0; // Points extérieur
    let forfait: "D" | "E" | "" = "";

    for (let i = 1; i <= 5; i++) {
      const keyD = `S${i}${L1}`;
      const keyE = `S${i}${L2}`;

      PD += match[keyD] ?? 0;
      PE += match[keyE] ?? 0;

      // Premier set 25-0 => Forfait
      if (i === 1) {
        if (PD === 25 && PE === 0) forfait = "E"; // Forfait extérieur
        if (PE === 25 && PD === 0) forfait = "D"; // Forfait domicile
      }
    }

    setForfait(forfait);

    const deltaPoints = PD - PE;
    setDeltaPoints(deltaPoints);

    const deltaSets =
      match.Sets_Domicile - match.Sets_Exterieur;

    if (deltaSets > 0) return "D"; // Victoire domicile
    if (deltaSets < 0) return "E"; // Victoire extérieur

    // Égalité en sets → départage aux points
    return PD > PE ? "D" : "E";
  }


}
