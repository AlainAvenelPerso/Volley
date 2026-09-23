import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../environments/environment';
import * as crypto from 'crypto-js';
import { min } from 'rxjs';
import { Categorie, Equipe, InfosEquipe, Joueur } from '../../models/models';
import type { Gymnase, TClassement } from '../../models/models';
import type { Calendrier, CalendrierEquipe, CalendrierJournee } from '../../models/models';

const POINT_GAGNANT = 2;      // 2 points pour une victoire
const POINT_PERDANT = 1       // 1 point pour une défaite

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  //private supabase: SupabaseClient;

  constructor(private supabase: SupabaseClient) {
    // Initialize Supabase client with credentials from environment
        // Déplacé dasn app.ts
    // this.supabase = createClient(
    //   supabase.supabaseUrl,
    //   supabase.supabaseKey,
    //   { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
    // );
    //console.log('Supabase client initialized', supabase.supabaseUrl, supabase.supabaseKey);
  }

    // Méthode pour récupérer la session actuelle
 async getSession() {
  return this.supabase.auth.getSession();
}

    // Renvoie le user actuel ou null s'il n'est pas connecté
  async getUser() {
    const { data: { user } } = await this.supabase.auth.getUser();

    const nom = user?.email?.split("@")[0] || "";
    console.log('Utilisateur actuel récupéré:', user, nom);
    const nomEquipe = await this.loadNomEquipe(nom);
      console.log('Nom de l\'équipe récupéré pour l\'utilisateur', user?.email, ':', nomEquipe);
      
 
    return nomEquipe;
  }
  async loginWithUsername(username: string, password: string) {
    // 1. Récupérer tous les users (admin.listUsers)
    // const { data: usersData, error: listError } =
    //   await this.supabase.auth.admin.listUsers();

    // if (listError) throw listError;

    // // 2. Trouver l'utilisateur par username
    // const user = usersData.users.find(
    //   (u) => u.user_metadata?.['username'] === username
    // );

    // if (!user) {
    //   throw new Error('Utilisateur introuvable');
    // }

    // 3. Connexion via email technique
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: username,
      password
    });

    if (error) throw error;

    return data;
  }

    // Charge le nom de l'équipe en fonction de son code
async loadNomEquipe(id: string) {
    try {
      // Hash the password with SHA256
      //console.log('Récupération du paramètre Supabase pour', parameter);

      const { data, error } = await this.supabase
        .from('Equipes')
        .select('Nom_Equipe')
        .eq('Code_Equipe', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          throw new Error('Équipe non trouvée.');
        }
        throw new Error(error.message);
      }

      if (data) {
        console.log('Paramètre récupéré : ', data);
        return data.Nom_Equipe;
      }

      throw new Error('Équipe non trouvée.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async loginParameter(parameter: string) {
    try {
      // Hash the password with SHA256
      //console.log('Récupération du paramètre Supabase pour', parameter);

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
        //console.log('Paramètre récupéré : ', data);
        return data;
      }

      throw new Error('Paramètre non trouvé.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  /**
   * Met à jour la valeur d'un paramètre dans la table Params (crée la ligne si absente).
   */
  async majParametre(nom: string, valeur: string): Promise<void> {
    const { data: existant, error: errSelect } = await this.supabase
      .from('Params')
      .select('Nom')
      .eq('Nom', nom)
      .limit(1);

    if (errSelect) {
      throw new Error(`Lecture Params échouée : ${errSelect.message}`);
    }

    if (existant && existant.length > 0) {
      const { error: errUpdate } = await this.supabase
        .from('Params')
        .update({ Valeur: valeur })
        .eq('Nom', nom);

      if (errUpdate) {
        throw new Error(`Mise à jour paramètre ${nom} échouée : ${errUpdate.message}`);
      }
    } else {
      const { error: errInsert } = await this.supabase
        .from('Params')
        .insert({ Nom: nom, Valeur: valeur });

      if (errInsert) {
        throw new Error(`Création paramètre ${nom} échouée : ${errInsert.message}`);
      }
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
      //console.log('Récupération des catégories pour la saison', saison);

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
        //console.log('Données des catégories récupérées : ', data);
        // Mapper les résultats Supabase vers ta classe Categorie
        const categories = data.map(
          (row: any) => new Categorie(row.Code_Categorie, row.Nom_Categorie)
        );
        //console.log('Catégories chargées :', categories);
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

      //console.log('Tentative de connexion Supabase pour', username, passwordHash);

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
        const token = await this.generateToken(data.Code_Equipe);

        console.log('Token généré pour l\'équipe', data.Code_Equipe, token);
      }

      throw new Error('Identifiant ou mot de passe incorrect.');
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  async generateToken(userId: string) {
  const res = await fetch(
    `${supabase.supabaseUrl}/functions/v1/generate-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabase.supabaseKey}`
      },
      body: JSON.stringify({
        userId,
        metadata: { admin: false }
      })
    }
  );

  const { token } = await res.json();
  return token;
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
      const clubPrefix = (equipe ?? '').split('-')[0].trim();
      const categoryCodes = categories.map(c => c.codeCategorie);

      console.log('Récupération des équipes du club pour le préfixe', clubPrefix);
      // Query the 'Equipes' table for matching username and password hash
      let query = this.supabase
        .from('Equipes')
        .select(`Nom_Equipe, Code_Equipe, Code_Categorie, Categories ("Nom_Categorie") `)
        .ilike('Nom_Equipe', `${clubPrefix}%`);

      if (categoryCodes.length > 0) {
        query = query.in('Code_Categorie', categoryCodes);
      }

      const { data, error } = await query.order('Nom_Equipe', { ascending: true });

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - invalid credentials
          throw new Error('Problème lors de la récupération des équipes du club.');
        }
        throw new Error(error.message);
      }

      if (data) {
        console.log('data equipes du club', data);
        const equipes = data
          .filter((row: any) => row.Nom_Equipe?.split('-')[0].trim().toLowerCase() === clubPrefix.toLowerCase())
          .map(
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

  /**
   * Retourne le décalage (en jours) par rapport au lundi selon le jour de match libellé.
   * La date par défaut d'une journée est le lundi (offset 0).
   */
  private offsetJourMatch(jour: string | null | undefined): number {
    const j = (jour ?? '').trim().toLowerCase();
    if (!j) return 0;
    // Détection robuste (gère abréviations et texte additionnel : "jeu.", "jeudi soir", ...).
    if (j.startsWith('lun')) return 0;
    if (j.startsWith('mar')) return 1;
    if (j.startsWith('mer')) return 2;
    if (j.startsWith('jeu')) return 3;
    if (j.startsWith('ven')) return 4;
    if (j.startsWith('sam')) return 5;
    if (j.startsWith('dim')) return 6;
    return 0;
  }

  async loadMatchsEquipe(equipe: number) {
    try {
      // 1) Matchs où l'équipe joue (à domicile ou à l'extérieur)
      const { data: matchs, error } = await this.supabase
        .from('Matchs')
        .select('NumMatch, Equipe_Domicile, Equipe_Exterieure, Sets_Domicile, Sets_Exterieur')
        .or(`Equipe_Domicile.eq.${equipe},Equipe_Exterieure.eq.${equipe}`);

      if (error) {
        throw new Error(error.message);
      }

      if (!matchs || matchs.length === 0) {
        return [];
      }

      // 2) Saison de l'équipe (via sa catégorie) pour retrouver les dates de journées
      let saison = '';
      const { data: eq } = await this.supabase
        .from('Equipes')
        .select('Code_Categorie')
        .eq('Code_Equipe', equipe)
        .limit(1);
      const codeCategorie = eq && eq.length > 0 ? Number(eq[0].Code_Categorie) : null;
      if (codeCategorie !== null) {
        const { data: cat } = await this.supabase
          .from('Categories')
          .select('Saison')
          .eq('Code_Categorie', codeCategorie)
          .limit(1);
        saison = cat && cat.length > 0 ? (cat[0].Saison ?? '') : '';
      }

      // 3) Dates des journées (NumMatch -> Date) pour la saison
      const datesParJournee = new Map<number, string>();
      if (saison) {
        const { data: dates } = await this.supabase
          .from('DateMatchs')
          .select('NumMatch, Date')
          .eq('Saison', saison);
        for (const d of dates ?? []) {
          datesParJournee.set(Number((d as any).NumMatch), (d as any).Date);
        }
      }

      // 4) Noms des adversaires
      const codesAdversaires = new Set<number>();
      for (const m of matchs) {
        const dom = Number((m as any).Equipe_Domicile);
        const ext = Number((m as any).Equipe_Exterieure);
        codesAdversaires.add(dom === equipe ? ext : dom);
      }
      const nomsEquipes = new Map<number, string>();
      if (codesAdversaires.size > 0) {
        const { data: adversaires } = await this.supabase
          .from('Equipes')
          .select('Code_Equipe, Nom_Equipe')
          .in('Code_Equipe', Array.from(codesAdversaires));
        for (const a of adversaires ?? []) {
          nomsEquipes.set(Number((a as any).Code_Equipe), (a as any).Nom_Equipe);
        }
      }

      // 4bis) Jour de match de chaque équipe qui reçoit (Equipe_Domicile) pour appliquer un offset.
      //        La date des journées est fixée au lundi ; on décale selon le jour de réception.
      const codesDomicile = new Set<number>();
      for (const m of matchs) {
        codesDomicile.add(Number((m as any).Equipe_Domicile));
      }
      const jourMatchParEquipe = new Map<number, string>();
      if (codesDomicile.size > 0) {
        const { data: recevantes, error: errRecev } = await this.supabase
          .from('Equipes')
          .select('Code_Equipe, Jour_Match')
          .in('Code_Equipe', Array.from(codesDomicile));
        if (errRecev) {
          console.error('Lecture Jour_Match échouée :', errRecev.message);
        }
        for (const r of recevantes ?? []) {
          jourMatchParEquipe.set(Number((r as any).Code_Equipe), (r as any).Jour_Match);
        }
      }

      // 5) Construction du résultat au format attendu (comme l'ancienne vue MatchsEquipe)
      const resultat = matchs.map((m: any) => {
        const dom = Number(m.Equipe_Domicile);
        const ext = Number(m.Equipe_Exterieure);
        const domicile = dom === equipe;
        const codeAdversaire = domicile ? ext : dom;
        const setsPour = domicile ? m.Sets_Domicile : m.Sets_Exterieur;
        const setsContre = domicile ? m.Sets_Exterieur : m.Sets_Domicile;

        // Date : date de la journée (fixée au lundi), décalée selon le jour de match
        // de l'équipe qui reçoit (Equipe_Domicile).
        const iso = datesParJournee.get(Number(m.NumMatch)) ?? null;
        let date = iso ? new Date(iso) : null;
        if (date) {
          const offset = this.offsetJourMatch(jourMatchParEquipe.get(dom));
          if (offset > 0) {
            date.setDate(date.getDate() + offset);
          }
        }

        return {
          Lieu: domicile ? 'D' : 'E',
          CodeAdversaire: codeAdversaire,
          Adversaire: nomsEquipes.get(codeAdversaire) ?? '',
          Date: date as any,
          SetsPour: setsPour,
          SetsContre: setsContre,
        };
      });

      // 6) Tri par date croissante (les dates nulles en fin)
      resultat.sort((a, b) => {
        if (!a.Date) return 1;
        if (!b.Date) return -1;
        return a.Date.getTime() - b.Date.getTime();
      });

      console.log('Matchs récupérés pour l\'équipe', equipe, resultat);
      return resultat;
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
        .select('Sets_Domicile, Sets_Exterieur, S1D, S2D, S3D, S4D, S5D, S1E, S2E, S3E, S4E, S5E, VD, VE')
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
        const setNumber = index + 1;
        updateData[`S${setNumber}D`] = Number(set?.[0] ?? 0);
        updateData[`S${setNumber}E`] = Number(set?.[1] ?? 0);
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

    async confirmerScoreMatch(Lieu: string, ED: number, EE: number): Promise<void> {
    try {
      console.log('Confirmation du score pour le match', ED, EE);

      const updateData: Record<string, any> = {};

      const today: string = new Date().toISOString().split('T')[0];

      if (Lieu == "D") {
        updateData['VD'] = true;
        updateData['VD_DATE'] = today;
      } else {
        updateData['VE'] = true;
        updateData['VE_DATE'] = today;
      }

      await this.supabase
        .from('Matchs')
        .update(updateData)
        .eq('Equipe_Domicile', ED)
        .eq('Equipe_Exterieure', EE);

      console.log('Score confirmé avec succès pour le match');
    }
    catch (error: any) {
      console.error('Erreur Supabase lors de l\'enregistrement du score:', error.message);
      throw error;
    }
  }

  async reporterMatch(Lieu: string, ED: number, EE: number, nouvelleDate: string): Promise<void> {
    try {
      console.log('Report du match', Lieu, ED, EE, nouvelleDate);

      const tentativeDateReport = await this.supabase
        .from('Matchs')
        .update({ Date_Report: nouvelleDate })
        .eq('Equipe_Domicile', ED)
        .eq('Equipe_Exterieure', EE);

      if (!tentativeDateReport.error) {
        console.log('Date_Report mise à jour avec succès');
        return;
      }

      throw tentativeDateReport.error;
    }
    catch (error: any) {
      console.error('Erreur Supabase lors du report du match:', error.message);
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
            Code_Categorie,
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
              Mail
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
          Nom_Equipe: data.Nom_Equipe,
          Jour_Match: data.Jour_Match,
          Heures_Match: data.Heures_Match,
          Code_Categorie: data.Code_Categorie,
          capitaine: {
            Nom: capitaine.Nom,
            Prenom: capitaine.Prenom,
            Mail: capitaine.Mail,
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
        console.log('Equipes récupérées pour la catégorie', CodeCategorie, data);

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
        // Index par code d'équipe (robuste même si les codes ne sont pas contigus).
        const indexParCode = new Map<number, number>();
        TabEquipes.forEach((t, idx) => indexParCode.set(Number(t.codeEquipe), idx));

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

          console.log('Matchs à domicile récupérés pour l\'équipe', equipe, matchs);

          for (const m of matchs) {

            console.log('Traitement du match domicile :', m);
            const EquipExtIndex = indexParCode.get(Number(m.Equipe_Exterieure)) ?? -1;   // Index de l'équipe extérieure dans le classement
            if (EquipExtIndex < 0) {
              // Adversaire hors catégorie (ex: équipe supprimée) : on ignore.
              continue;
            }
            console.log('Index de l\'équipe extérieure dans le classement :', EquipExtIndex);
            const SD = m.Sets_Domicile;
            const SE = m.Sets_Exterieur;

            let deltaSets = 0;
            let deltaPoints = 0;
            let forfait = "";
            const gagnant = this.chercheGagnantPoints(m, "D", "E", (s) => {
              deltaSets = s;
              console.log('Delta sets domicile trouvé s:', s);
            }, (d) => {
              console.log('Delta points domicile trouvé d:', d);
              deltaPoints = d;
            }, (f) => {
              console.log('Delta points domicile trouvé f:', f);
              forfait = f;
            });
            console.log('Gagnant du match:', gagnant, 'forfait:', forfait);
            //if (SD !== 0 || SE !== 0) {
            if (gagnant)
              {
              // Match joué
              TabEquipes[i].nbJoues += 1;
              TabEquipes[EquipExtIndex].nbJoues += 1;

              if (gagnant === "D")
                {
                // Victoire domicile
                TabEquipes[i].points += POINT_GAGNANT;
                TabEquipes[i].gas += deltaSets;
                TabEquipes[i].gap += deltaPoints;
                TabEquipes[i].nbGagnes += 1;

                if (forfait === "E") {
                  TabEquipes[EquipExtIndex].nbForfaits += 1;
                } else {
                  TabEquipes[EquipExtIndex].points += POINT_PERDANT;
                  TabEquipes[EquipExtIndex].nbPerdus += 1;
                }

                TabEquipes[EquipExtIndex].gas -= deltaSets;
                TabEquipes[EquipExtIndex].gap -= deltaPoints;
                } 
              else if (gagnant === "E") 
                {
                // Victoire extérieure
                if (forfait === "D") 
                  {
                  TabEquipes[i].nbForfaits += 1;
                  } 
                else 
                  {
                  TabEquipes[i].points += POINT_PERDANT;
                  TabEquipes[i].nbPerdus += 1;
                  }

                TabEquipes[i].gas += deltaSets;
                TabEquipes[i].gap += deltaPoints;

                TabEquipes[EquipExtIndex].points += POINT_GAGNANT;
                TabEquipes[EquipExtIndex].gas -= deltaSets;
                TabEquipes[EquipExtIndex].gap -= deltaPoints;
                TabEquipes[EquipExtIndex].nbGagnes += 1;
              }
            }


          }
              //         if (i == 0)      // Pour voir un exemple de classement après le traitement de l'équipe i
              // return TabEquipes;
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

  /**
   * Construit le calendrier d'une catégorie : équipes de la poule (avec gymnase/jour/horaire),
   * dates de journées et appariements (indices locaux domicile/extérieur) par journée.
   */
  async chargerCalendrierCategorie(codeCategorie: number): Promise<Calendrier> {
    // 1) Équipes de la poule, ordonnées par code (indice local = rang d'ordre).
    const { data: equipesData, error: errEquipes } = await this.supabase
      .from('Equipes')
      .select(`
        Code_Equipe,
        Nom_Equipe,
        Jour_Match,
        Heures_Match,
        Gymnases (
          Nom_Gymnase,
          Adresse,
          Commune,
          X,
          Y
        )
      `)
      .eq('Code_Categorie', codeCategorie)
      .order('Code_Equipe', { ascending: true });

    if (errEquipes) {
      throw new Error(`Lecture Equipes échouée : ${errEquipes.message}`);
    }

    const equipes: CalendrierEquipe[] = (equipesData ?? []).map((row: any, idx: number) => {
      const gym = (row.Gymnases ?? null) as Gymnase | null;
      return {
        code: Number(row.Code_Equipe),
        rang: idx + 1,
        nom: String(row.Nom_Equipe ?? ''),
        gymnase: gym,
        commune: gym?.Commune ?? '',
        jourMatch: row.Jour_Match ?? '',
        heuresMatch: row.Heures_Match ?? '',
      };
    });

    const indexParCode = new Map<number, number>();
    equipes.forEach(e => indexParCode.set(e.code, e.rang));

    if (equipes.length === 0) {
      return { equipes, journees: [] };
    }

    // 2) Saison de la catégorie pour retrouver les dates de journées.
    let saison = '';
    const { data: cat } = await this.supabase
      .from('Categories')
      .select('Saison')
      .eq('Code_Categorie', codeCategorie)
      .limit(1);
    saison = cat && cat.length > 0 ? (cat[0].Saison ?? '') : '';

    // 3) Dates des journées (NumMatch -> Date), triées par numéro de journée.
    const datesParJournee = new Map<number, string>();
    if (saison) {
      const { data: dates } = await this.supabase
        .from('DateMatchs')
        .select('NumMatch, Date')
        .eq('Saison', saison)
        .order('NumMatch', { ascending: true });
      for (const d of dates ?? []) {
        datesParJournee.set(Number((d as any).NumMatch), String((d as any).Date).slice(0, 10));
      }
    }

    // 4) Matchs de la poule (équipe domicile dans la poule).
    const codes = equipes.map(e => e.code);
    const { data: matchs, error: errMatchs } = await this.supabase
      .from('Matchs')
      .select('NumMatch, Equipe_Domicile, Equipe_Exterieure, Sets_Domicile, Sets_Exterieur')
      .in('Equipe_Domicile', codes);

    if (errMatchs) {
      throw new Error(`Lecture Matchs échouée : ${errMatchs.message}`);
    }

    // 5) Regroupement des rencontres par journée.
    const rencontresParJournee = new Map<number, { domicile: number; exterieur: number; joue: boolean }[]>();
    for (const m of matchs ?? []) {
      const num = Number((m as any).NumMatch);
      const iDom = indexParCode.get(Number((m as any).Equipe_Domicile));
      const iExt = indexParCode.get(Number((m as any).Equipe_Exterieure));
      if (!iDom || !iExt) {
        continue;
      }
      const joue = (m as any).Sets_Domicile != null && (m as any).Sets_Exterieur != null
        && ((Number((m as any).Sets_Domicile) + Number((m as any).Sets_Exterieur)) > 0);
      if (!rencontresParJournee.has(num)) {
        rencontresParJournee.set(num, []);
      }
      rencontresParJournee.get(num)!.push({ domicile: iDom, exterieur: iExt, joue });
    }

    // 6) Construction des journées (une par NumMatch présent dans DateMatchs).
    const journees: CalendrierJournee[] = Array.from(datesParJournee.keys())
      .sort((a, b) => a - b)
      .map(num => ({
        numMatch: num,
        date: datesParJournee.get(num) ?? '',
        rencontres: (rencontresParJournee.get(num) ?? []).sort((a, b) => a.domicile - b.domicile),
      }));

    return { equipes, journees };
  }

  async loadResultats(categorie: number) {
    try {
      console.log('Récupération des résultats pour la catégorie', categorie);

      // 1) Équipes de la catégorie (pour restreindre les matchs et récupérer les noms)
      const { data: equipes, error: errEquipes } = await this.supabase
        .from('Equipes')
        .select('Code_Equipe, Nom_Equipe')
        .eq('Code_Categorie', categorie)
        .order('Code_Equipe', { ascending: true });

      if (errEquipes) {
        throw new Error(errEquipes.message);
      }

      const codes = (equipes ?? []).map(e => Number(e.Code_Equipe));
      const nomsEquipes = new Map<number, string>();
      for (const e of equipes ?? []) {
        nomsEquipes.set(Number(e.Code_Equipe), String(e.Nom_Equipe));
      }

      if (codes.length === 0) {
        return [];
      }

      // 2) Matchs entre équipes de la catégorie (équipe domicile dans la catégorie)
      const { data: matchs, error: errMatchs } = await this.supabase
        .from('Matchs')
        .select('Equipe_Domicile, Equipe_Exterieure, Sets_Domicile, Sets_Exterieur')
        .in('Equipe_Domicile', codes)
        .order('Equipe_Domicile', { ascending: true })
        .order('Equipe_Exterieure', { ascending: true });

      if (errMatchs) {
        throw new Error(errMatchs.message);
      }

      // 3) Construction au format attendu (comme l'ancienne vue MatchsCategorie)
      const resultat = (matchs ?? []).map((m: any) => ({
        Nom_Equipe: nomsEquipes.get(Number(m.Equipe_Domicile)) ?? '',
        Equipe_Domicile: Number(m.Equipe_Domicile),
        Equipe_Exterieure: Number(m.Equipe_Exterieure),
        Sets_Domicile: m.Sets_Domicile,
        Sets_Exterieur: m.Sets_Exterieur,
      }));

      console.log('Résultats récupérés pour la catégorie', categorie, resultat);
      return resultat;
    } catch (error: any) {
      console.error('Erreur Supabase:', error.message);
      throw error;
    }
  }

  chercheGagnantPoints(
    match: any,
    L1: "D" | "E",
    L2: "D" | "E",
    setDeltaSets: (s: number) => void,
    setDeltaPoints: (d: number) => void,
    setForfait: (f: "D" | "E" | "") => void
  ): "D" | "E" | null {
    //console.log('chercheGagnantPoints appelé avec match:', match, L1, L2);
    if (match.Sets_Domicile === null || match.Sets_Domicile === undefined)
    {
      //console.log('Match sans score trouvé :', match);

      return null; // Pas de score, pas de gagnant
    }

    // Match sans aucun set marqué de part et d'autre => non joué (0-0).
    if ((match.Sets_Domicile ?? 0) === 0 && (match.Sets_Exterieur ?? 0) === 0) {
      return null;
    }
    let PD = 0; // Points domicile
    let PE = 0; // Points extérieur

    // Détection de forfait : exactement 3 sets à 25-0 en faveur du gagnant.
    let sets250_D = 0; // nombre de sets 25-0 gagnés par le domicile
    let sets250_E = 0; // nombre de sets 25-0 gagnés par l'extérieur

    for (let i = 1; i <= 5; i++) {
      const keyD = `S${i}${L1}`;
      const keyE = `S${i}${L2}`;

      const sd = match[keyD] ?? 0;
      const se = match[keyE] ?? 0;

      PD += sd;
      PE += se;

      if (sd === 25 && se === 0) sets250_D++;
      if (se === 25 && sd === 0) sets250_E++;
    }

    // Forfait = 3 sets à 25-0.
    let forfait: "D" | "E" | "" = "";
    if (sets250_D === 3 && PE === 0) {
      forfait = "E"; // l'extérieur a déclaré forfait
    } else if (sets250_E === 3 && PD === 0) {
      forfait = "D"; // le domicile a déclaré forfait
    }

    setForfait(forfait);

    const deltaPoints = PD - PE;
    setDeltaPoints(deltaPoints);

    const deltaSets = match.Sets_Domicile - match.Sets_Exterieur;
    setDeltaSets(deltaSets);

    if (deltaSets > 0) return "D"; // Victoire domicile
    if (deltaSets < 0) return "E"; // Victoire extérieur

    // Égalité en sets → départage aux points
    return PD > PE ? "D" : "E";
  }

  // ==========================================================================
  //  IMPORT ADMIN : Catégories, Capitaines (Joueurs), Équipes
  // ==========================================================================

  /** Récupère la valeur max d'une colonne bigint (clé) pour calculer le prochain code. */
  private async prochainCode(table: string, colonne: string): Promise<number> {
    const { data, error } = await this.supabase
      .from(table)
      .select(colonne)
      .order(colonne, { ascending: false })
      .limit(1);

    if (error) {
      throw new Error(`Impossible de lire ${colonne} sur ${table} : ${error.message}`);
    }

    const maxActuel = data && data.length > 0 ? Number((data[0] as any)[colonne]) : 0;
    return (isNaN(maxActuel) ? 0 : maxActuel) + 1;
  }

  /**
   * Récupère le Code_Categorie d'une catégorie (Nom + Saison), ou la crée si absente.
   */
  async getOrCreateCategorie(nomCategorie: string, saison: string): Promise<number> {
    // La colonne "poule" fournit la lettre (ex: "A"). On dérive :
    //  - Nom_Categorie = "Poule A"
    //  - Abreviation   = "PA"
    const lettre = (nomCategorie ?? '').trim().toUpperCase();
    const nomComplet = `Poule ${lettre}`;
    const abreviation = `P${lettre}`;

    const { data: existante, error: errSelect } = await this.supabase
      .from('Categories')
      .select('Code_Categorie')
      .eq('Nom_Categorie', nomComplet)
      .eq('Saison', saison)
      .limit(1);

    if (errSelect) {
      throw new Error(`Lecture Categories échouée : ${errSelect.message}`);
    }

    if (existante && existante.length > 0) {
      return Number(existante[0].Code_Categorie);
    }

    const nouveauCode = await this.prochainCode('Categories', 'Code_Categorie');
    const { error: errInsert } = await this.supabase
      .from('Categories')
      .insert({
        Code_Categorie: nouveauCode,
        Nom_Categorie: nomComplet,
        Saison: saison,
        Abreviation: abreviation,
      });

    if (errInsert) {
      throw new Error(`Création catégorie ${nomComplet} échouée : ${errInsert.message}`);
    }

    return nouveauCode;
  }

  /**
   * Récupère le Code_Joueur d'un capitaine via son email (Mail), ou le crée si absent.
   */
  async getOrCreateCapitaine(mail: string, prenom: string, nom: string): Promise<number | null> {
    // L'email n'est pas sensible à la casse : on normalise en minuscules.
    const mailNettoye = (mail ?? '').trim().toLowerCase();
    if (!mailNettoye) {
      return null; // Pas d'email => pas de capitaine identifiable
    }

    const { data: existant, error: errSelect } = await this.supabase
      .from('Joueurs')
      .select('Code_Joueur, Nom, Prenom')
      .ilike('Mail', mailNettoye)
      .limit(1);

    if (errSelect) {
      throw new Error(`Lecture Joueurs échouée : ${errSelect.message}`);
    }

    if (existant && existant.length > 0) {
      const joueur = existant[0] as any;
      const code = Number(joueur.Code_Joueur);

      const nomNettoye = (nom ?? '').trim() || null;
      const prenomNettoye = (prenom ?? '').trim() || null;

      // Le mail est la clef : si Nom ou Prénom ont changé, on corrige la fiche.
      if (joueur.Nom !== nomNettoye || joueur.Prenom !== prenomNettoye) {
        const { error: errUpdate } = await this.supabase
          .from('Joueurs')
          .update({ Nom: nomNettoye, Prenom: prenomNettoye })
          .eq('Code_Joueur', code);

        if (errUpdate) {
          throw new Error(`Mise à jour capitaine ${mailNettoye} échouée : ${errUpdate.message}`);
        }
      }

      return code;
    }

    const nouveauCode = await this.prochainCode('Joueurs', 'Code_Joueur');
    const { error: errInsert } = await this.supabase
      .from('Joueurs')
      .insert({
        Code_Joueur: nouveauCode,
        Nom: (nom ?? '').trim() || null,
        Prenom: (prenom ?? '').trim() || null,
        Mail: mailNettoye,
      });

    if (errInsert) {
      throw new Error(`Création capitaine ${mailNettoye} échouée : ${errInsert.message}`);
    }

    return nouveauCode;
  }

  /**
   * Crée une équipe si elle n'existe pas déjà (par Nom_Equipe + Code_Categorie).
   * Retourne { statut, message }.
   */
  async creerEquipeSiAbsente(
    nomEquipe: string,
    codeCategorie: number,
    codeGymnase: number,
    jourMatch: string,
    horaireMatch: string,
    codeCapitaine: number | null
  ): Promise<{ statut: 'créée' | 'existante'; codeEquipe: number; motDePasse?: string }> {
    const { data: existante, error: errSelect } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe')
      .eq('Nom_Equipe', nomEquipe)
      .eq('Code_Categorie', codeCategorie)
      .limit(1);

    if (errSelect) {
      throw new Error(`Lecture Equipes échouée : ${errSelect.message}`);
    }

    if (existante && existante.length > 0) {
      const codeExistant = Number(existante[0].Code_Equipe);
      // L'équipe existe déjà : on met à jour ses informations (jour/horaire/gymnase/capitaine)
      // pour refléter un éventuel ré-import avec des données corrigées.
      const { error: errUpdate } = await this.supabase
        .from('Equipes')
        .update({
          Code_Gymnase: codeGymnase,
          Jour_Match: jourMatch,
          Heures_Match: horaireMatch,
          Code_Capitaine: codeCapitaine,
        })
        .eq('Code_Equipe', codeExistant);
      if (errUpdate) {
        throw new Error(`Mise à jour équipe ${nomEquipe} échouée : ${errUpdate.message}`);
      }
      return { statut: 'existante', codeEquipe: codeExistant };
    }

    const nouveauCode = await this.prochainCode('Equipes', 'Code_Equipe');
    const motDePasse = this.genererMotDePasse();
    const motDePasseHash = crypto.SHA256(motDePasse).toString();

    const { error: errInsert } = await this.supabase
      .from('Equipes')
      .insert({
        Code_Equipe: nouveauCode,
        Nom_Equipe: nomEquipe,
        Code_Categorie: codeCategorie,
        Code_Gymnase: codeGymnase,
        Jour_Match: jourMatch,
        Heures_Match: horaireMatch,
        Code_Capitaine: codeCapitaine,
        Mot2Passe: motDePasseHash,
      });

    if (errInsert) {
      throw new Error(`Création équipe ${nomEquipe} échouée : ${errInsert.message}`);
    }

    // On retourne le mot de passe en clair pour l'affichage à l'admin (la base ne stocke que le hash).
    return { statut: 'créée', codeEquipe: nouveauCode, motDePasse };
  }

  /** Génère un mot de passe aléatoire de 12 caractères avec au moins 1 caractère spécial. */
  private genererMotDePasse(longueur: number = 12): string {
    const lettres = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
    const chiffres = '23456789';
    const speciaux = '!@#$%&*?';
    const tous = lettres + chiffres + speciaux;

    // Garantit au moins un caractère de chaque type (dont un spécial).
    const chars: string[] = [
      lettres.charAt(Math.floor(Math.random() * lettres.length)),
      chiffres.charAt(Math.floor(Math.random() * chiffres.length)),
      speciaux.charAt(Math.floor(Math.random() * speciaux.length)),
    ];
    for (let i = chars.length; i < longueur; i++) {
      chars.push(tous.charAt(Math.floor(Math.random() * tous.length)));
    }

    // Mélange (Fisher-Yates) pour ne pas figer la position des caractères garantis.
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    return chars.join('');
  }

  /**
   * Authentifie une équipe par son Code_Equipe et son mot de passe (colonne Mot2Passe).
   * Retourne les infos de l'équipe si le mot de passe correspond, sinon null.
   */
  async loginEquipe(codeEquipe: number, motDePasse: string): Promise<{
    Code_Equipe: number;
    Nom_Equipe: string;
    Code_Categorie: number;
  } | null> {
    const { data, error } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe, Nom_Equipe, Code_Categorie, Mot2Passe')
      .eq('Code_Equipe', codeEquipe)
      .limit(1);

    if (error) {
      throw new Error(`Lecture Equipes échouée : ${error.message}`);
    }

    if (!data || data.length === 0) {
      return null;
    }

    const equipe = data[0] as any;
    const motDePasseHash = crypto.SHA256(motDePasse).toString();
    const stocke = equipe.Mot2Passe ?? '';
    // Compare au hash ; accepte aussi une éventuelle valeur historique en clair.
    if (stocke !== motDePasseHash && stocke !== motDePasse) {
      return null;
    }

    return {
      Code_Equipe: Number(equipe.Code_Equipe),
      Nom_Equipe: equipe.Nom_Equipe,
      Code_Categorie: Number(equipe.Code_Categorie),
    };
  }

  /**
   * Recherche le Code_Gymnase d'un gymnase à partir du nom de base d'une équipe.
   * La table Gymnases contient une colonne Nom_Equipe (ex: "Cusset") ;
   * pour une équipe "Cusset -1" on recherche donc "Cusset".
   * Retourne le Code_Gymnase ou null si aucun gymnase ne correspond.
   */
  async trouverGymnaseParEquipe(nomBaseEquipe: string): Promise<number | null> {
    const nom = (nomBaseEquipe ?? '').trim();
    if (!nom) {
      return null;
    }

    const { data, error } = await this.supabase
      .from('Gymnases')
      .select('Code_Gymnase')
      .ilike('Nom_Equipe', nom)
      .limit(1);

    if (error) {
      throw new Error(`Lecture Gymnases échouée : ${error.message}`);
    }

    if (data && data.length > 0) {
      return Number(data[0].Code_Gymnase);
    }

    return null;
  }

  /**
   * Crée un gymnase (table Gymnases) avec les infos saisies manuellement,
   * puis rattache les équipes correspondantes (dont le Nom de base = Nom_Equipe)
   * au nouveau Code_Gymnase.
   */
  async creerGymnaseEtRattacher(infos: {
    nomEquipe: string;
    nomGymnase: string;
    adresse: string;
    commune: string;
    x: number | null;
    y: number | null;
  }): Promise<number> {
    const nomEquipe = (infos.nomEquipe ?? '').trim();

    const nouveauCode = await this.prochainCode('Gymnases', 'Code_Gymnase');
    const { error: errInsert } = await this.supabase
      .from('Gymnases')
      .insert({
        Code_Gymnase: nouveauCode,
        Nom_Gymnase: infos.nomGymnase,
        Adresse: infos.adresse || null,
        Commune: infos.commune || null,
        X: infos.x ?? null,
        Y: infos.y ?? null,
        Nom_Equipe: nomEquipe,
      });

    if (errInsert) {
      throw new Error(`Création gymnase ${infos.nomGymnase} échouée : ${errInsert.message}`);
    }

    // Rattache les équipes dont le nom commence par le nom de base (ex: "Cusset -1", "Cusset -2")
    const { error: errUpdate } = await this.supabase
      .from('Equipes')
      .update({ Code_Gymnase: nouveauCode })
      .ilike('Nom_Equipe', `${nomEquipe}%`);

    if (errUpdate) {
      throw new Error(`Rattachement des équipes au gymnase échoué : ${errUpdate.message}`);
    }

    return nouveauCode;
  }

  /**
   * Enregistre (remplace) les dates de journées pour une saison dans la table DateMatchs.
   * Supprime d'abord les dates existantes de la saison, puis insère les nouvelles.
   */
  async enregistrerDatesMatchs(
    saison: string,
    dates: { journee: number; date: string }[]
  ): Promise<void> {
    // Purge des dates existantes pour la saison
    const { error: errDelete } = await this.supabase
      .from('DateMatchs')
      .delete()
      .eq('Saison', saison);

    if (errDelete) {
      throw new Error(`Suppression des dates existantes échouée : ${errDelete.message}`);
    }

    const lignes = dates.map(d => ({
      Saison: saison,
      NumMatch: d.journee,
      Date: d.date,
    }));

    const { error: errInsert } = await this.supabase
      .from('DateMatchs')
      .insert(lignes);

    if (errInsert) {
      throw new Error(`Enregistrement des dates échoué : ${errInsert.message}`);
    }
  }

  /**
   * Charge les dates de journées d'une saison depuis DateMatchs, triées par NumMatch.
   */
  async chargerDatesMatchs(saison: string): Promise<{ journee: number; date: string }[]> {
    const { data, error } = await this.supabase
      .from('DateMatchs')
      .select('NumMatch, Date')
      .eq('Saison', saison)
      .order('NumMatch', { ascending: true });

    if (error) {
      throw new Error(`Lecture DateMatchs échouée : ${error.message}`);
    }

    return (data ?? []).map((r: any) => ({
      journee: Number(r.NumMatch),
      date: String(r.Date),
    }));
  }

  /**
   * Retourne les Code_Categorie d'une saison.
   */
  async codesCategoriesSaison(saison: string): Promise<number[]> {
    const { data, error } = await this.supabase
      .from('Categories')
      .select('Code_Categorie')
      .eq('Saison', saison);

    if (error) {
      throw new Error(`Lecture Categories échouée : ${error.message}`);
    }

    return (data ?? []).map((c: any) => Number(c.Code_Categorie));
  }

  /**
   * Retourne le nombre maximal d'équipes parmi les poules d'une saison.
   */
  async nbEquipesMaxParPoule(saison: string): Promise<number> {
    const codesCategories = await this.codesCategoriesSaison(saison);
    if (codesCategories.length === 0) {
      return 0;
    }

    const { data, error } = await this.supabase
      .from('Equipes')
      .select('Code_Categorie')
      .in('Code_Categorie', codesCategories);

    if (error) {
      throw new Error(`Lecture Equipes échouée : ${error.message}`);
    }

    const compte = new Map<number, number>();
    for (const row of data ?? []) {
      const cat = Number((row as any).Code_Categorie);
      compte.set(cat, (compte.get(cat) ?? 0) + 1);
    }

    let max = 0;
    for (const n of compte.values()) {
      if (n > max) {
        max = n;
      }
    }
    return max;
  }

  /** Retourne le nombre d'équipes créées pour une saison. */
  async nbEquipesSaison(saison: string): Promise<number> {
    const codesCategories = await this.codesCategoriesSaison(saison);
    if (codesCategories.length === 0) {
      return 0;
    }

    const { count, error } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe', { count: 'exact', head: true })
      .in('Code_Categorie', codesCategories);

    if (error) {
      throw new Error(`Comptage Equipes échoué : ${error.message}`);
    }
    return count ?? 0;
  }

  /** Retourne le nombre de matchs créés pour une saison. */
  async nbMatchsSaison(saison: string): Promise<number> {
    const codesCategories = await this.codesCategoriesSaison(saison);
    if (codesCategories.length === 0) {
      return 0;
    }

    const { data: equipes, error: errEq } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe')
      .in('Code_Categorie', codesCategories);

    if (errEq) {
      throw new Error(`Lecture Equipes échouée : ${errEq.message}`);
    }

    const codesEquipes = (equipes ?? []).map(e => Number(e.Code_Equipe));
    if (codesEquipes.length === 0) {
      return 0;
    }

    const { count, error } = await this.supabase
      .from('Matchs')
      .select('Equipe_Domicile', { count: 'exact', head: true })
      .in('Equipe_Domicile', codesEquipes);

    if (error) {
      throw new Error(`Comptage Matchs échoué : ${error.message}`);
    }
    return count ?? 0;
  }

  /**
   * Retourne la liste des clubs (préfixe du Nom_Equipe avant le "-") pour une saison,
   * triée et dédoublonnée.
   */
  async listerClubs(saison: string): Promise<string[]> {
    const codesCategories = await this.codesCategoriesSaison(saison);
    if (codesCategories.length === 0) {
      return [];
    }

    const { data, error } = await this.supabase
      .from('Equipes')
      .select('Nom_Equipe')
      .in('Code_Categorie', codesCategories)
      .order('Nom_Equipe', { ascending: true });

    if (error) {
      throw new Error(`Lecture Equipes échouée : ${error.message}`);
    }

    const clubs = new Set<string>();
    for (const row of data ?? []) {
      const nom = (row.Nom_Equipe ?? '').trim();
      if (!nom) continue;
      const prefixe = nom.replace(/\s*[-–—]\s*\d+\s*$/, '').trim();
      if (prefixe) {
        clubs.add(prefixe);
      }
    }

    return Array.from(clubs).sort((a, b) => a.localeCompare(b, 'fr'));
  }

  /**
   * Pour un club (préfixe), retourne ses équipes et, pour chacune, le lieu (D/E) par date de match.
   * Utilise la table Matchs et les dates de journées (DateMatchs) de la saison.
   */
  async chargerPlanningClub(clubPrefix: string, saison: string): Promise<{
    equipes: { code: number; nom: string }[];
    // clé = date ISO (YYYY-MM-DD), valeur = map code équipe -> 'D' | 'E'
    parDate: Map<string, Map<number, string>>;
  }> {
    const prefixe = (clubPrefix ?? '').trim();
    const codesCategories = await this.codesCategoriesSaison(saison);

    // 1) Équipes du club (limitées à la saison)
    let requete = this.supabase
      .from('Equipes')
      .select('Code_Equipe, Nom_Equipe')
      .ilike('Nom_Equipe', `${prefixe}%`);

    if (codesCategories.length > 0) {
      requete = requete.in('Code_Categorie', codesCategories);
    }

    const { data: equipesData, error: errEquipes } = await requete.order('Nom_Equipe', { ascending: true });

    if (errEquipes) {
      throw new Error(`Lecture Equipes échouée : ${errEquipes.message}`);
    }

    const equipes = (equipesData ?? [])
      .filter((r: any) => (r.Nom_Equipe ?? '').replace(/\s*[-–—]\s*\d+\s*$/, '').trim().toLowerCase() === prefixe.toLowerCase())
      .map((r: any) => ({ code: Number(r.Code_Equipe), nom: String(r.Nom_Equipe) }));

    // 2) Dates des journées (NumMatch -> Date ISO) pour la saison
    const datesParJournee = new Map<number, string>();
    const { data: dates } = await this.supabase
      .from('DateMatchs')
      .select('NumMatch, Date')
      .eq('Saison', saison);
    for (const d of dates ?? []) {
      datesParJournee.set(Number((d as any).NumMatch), String((d as any).Date).slice(0, 10));
    }

    // 3) Pour chaque équipe, ses matchs (Lieu + Date) depuis la table Matchs
    const parDate = new Map<string, Map<number, string>>();

    for (const eq of equipes) {
      const { data: matchs, error: errMatchs } = await this.supabase
        .from('Matchs')
        .select('NumMatch, Equipe_Domicile, Equipe_Exterieure')
        .or(`Equipe_Domicile.eq.${eq.code},Equipe_Exterieure.eq.${eq.code}`);

      if (errMatchs) {
        throw new Error(`Lecture Matchs échouée : ${errMatchs.message}`);
      }

      for (const m of matchs ?? []) {
        const domicile = Number((m as any).Equipe_Domicile) === eq.code;
        const dateBrute = datesParJournee.get(Number((m as any).NumMatch)) ?? null;
        if (!dateBrute) {
          continue;
        }
        const dateIso = String(dateBrute).slice(0, 10);
        if (!parDate.has(dateIso)) {
          parDate.set(dateIso, new Map<number, string>());
        }
        parDate.get(dateIso)!.set(eq.code, domicile ? 'D' : 'E');
      }
    }

    return { equipes, parDate };
  }

  /**
   * Génère le calendrier (round-robin aller/retour, méthode du cercle) d'une poule
   * et retourne la liste des matchs { numMatch, domicile, exterieur }.
   * Transpose fidèlement l'algorithme PHP CreationMatchs/CrationMatch/InsertMatch.
   *
   * @param codes Codes des équipes de la poule (indices locaux 1..N mappés sur codes[0..N-1]).
   */
  genererCalendrierPoule(codes: number[]): { numMatch: number; domicile: number; exterieur: number }[] {
    const matchs: { numMatch: number; domicile: number; exterieur: number }[] = [];
    const N = codes.length;
    if (N < 2) {
      return matchs;
    }

    // Code réel d'un indice local (1..N). L'indice P = N+1 (poule impaire) est le "bye".
    const codePour = (idx: number): number | null =>
      idx >= 1 && idx <= N ? codes[idx - 1] : null;

    // Équivalent de InsertMatch : ajoute aller (M) et retour (M+JM).
    const insertMatch = (M: number, d: number, e: number, JM: number): void => {
      const cd = codePour(d);
      const ce = codePour(e);
      if (cd === null || ce === null) {
        return;
      }
      matchs.push({ numMatch: M, domicile: cd, exterieur: ce });
      matchs.push({ numMatch: M + JM, domicile: ce, exterieur: cd });
    };

    // Équivalent de CrationMatch : ignore les rencontres avec l'équipe fictive si N impair.
    const creationMatch = (M: number, d: number, e: number, JM: number): void => {
      if (N % 2) {
        const P = N + 1;
        if (d !== P && e !== P) {
          insertMatch(M, d, e, JM);
        }
      } else {
        insertMatch(M, d, e, JM);
      }
    };

    const demiN = Math.ceil(N / 2);
    const P = 2 * demiN;

    for (let M = 1; M < P; M++) {
      let E = 0; // équivalent de $E non défini (unset) en début de journée
      for (let i = demiN; i >= 1; i--) {
        let D = i + M - 1;
        if (D >= P) {
          D = (D % P) + 1;
        }
        if (!E) {
          E = D + 1;
        } else {
          E++;
        }
        if (E === P && i !== 1) {
          E = 1;
        }
        if (E >= P) {
          E -= P + 1;
        }
        if (i === 1) {
          E = P;
        }

        if (i % 2 === 0) {
          // Inversion d'un match sur 2
          creationMatch(M, E, D, P - 1);
        } else if (i === 1 && M % 2 === 0) {
          // Inversion d'un match sur 2 pour l'équipe N
          creationMatch(M, E, D, P - 1);
        } else {
          creationMatch(M, D, E, P - 1);
        }
      }
    }

    return matchs;
  }

  /**
   * Génère et enregistre le calendrier complet d'une saison :
   * pour chaque catégorie, crée les matchs round-robin aller/retour de la poule.
   * Les anciens matchs sont supposés déjà purgés (voir purgerSaison).
   * Retourne le nombre de matchs créés.
   */
  async genererChampionnat(saison: string): Promise<number> {
    // 1) Catégories de la saison
    const codesCategories = await this.codesCategoriesSaison(saison);
    if (codesCategories.length === 0) {
      return 0;
    }

    // 1bis) Efface les matchs existants de la saison (des équipes de ces catégories)
    //       avant de régénérer, pour éviter les doublons de clé primaire.
    const { data: equipesSaison, error: errEqSaison } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe')
      .in('Code_Categorie', codesCategories);

    if (errEqSaison) {
      throw new Error(`Lecture Equipes (nettoyage championnat) échouée : ${errEqSaison.message}`);
    }

    const codesEquipesSaison = (equipesSaison ?? []).map(e => Number(e.Code_Equipe));
    if (codesEquipesSaison.length > 0) {
      const { error: errDelDom } = await this.supabase
        .from('Matchs')
        .delete()
        .in('Equipe_Domicile', codesEquipesSaison);
      if (errDelDom) {
        throw new Error(`Suppression des anciens matchs échouée : ${errDelDom.message}`);
      }

      const { error: errDelExt } = await this.supabase
        .from('Matchs')
        .delete()
        .in('Equipe_Exterieure', codesEquipesSaison);
      if (errDelExt) {
        throw new Error(`Suppression des anciens matchs échouée : ${errDelExt.message}`);
      }
    }

    let matchsARegistrer: { NumMatch: number; Equipe_Domicile: number; Equipe_Exterieure: number }[] = [];

    for (const codeCat of codesCategories) {
      // 2) Équipes de la poule, triées par Code_Equipe (ordre de création)
      const { data: equipes, error } = await this.supabase
        .from('Equipes')
        .select('Code_Equipe')
        .eq('Code_Categorie', codeCat)
        .order('Code_Equipe', { ascending: true });

      if (error) {
        throw new Error(`Lecture Equipes (championnat) échouée : ${error.message}`);
      }

      const codes = (equipes ?? []).map(e => Number(e.Code_Equipe));
      const calendrier = this.genererCalendrierPoule(codes);

      for (const m of calendrier) {
        matchsARegistrer.push({
          NumMatch: m.numMatch,
          Equipe_Domicile: m.domicile,
          Equipe_Exterieure: m.exterieur,
        });
      }
    }

    if (matchsARegistrer.length === 0) {
      return 0;
    }

    // 3) Insertion en base
    const { error: errInsert } = await this.supabase
      .from('Matchs')
      .insert(matchsARegistrer);

    if (errInsert) {
      throw new Error(`Insertion des matchs échouée : ${errInsert.message}`);
    }

    // 4) Nettoyage des équipes fictives "Dummy*" et de leurs matchs
    await this.supprimerEquipesDummy(codesCategories);

    return matchsARegistrer.length;
  }

  /**
   * Supprime les équipes fictives (Nom_Equipe commençant par "Dummy") des catégories
   * fournies, ainsi que tous les matchs où elles apparaissent (domicile ou extérieur).
   */
  private async supprimerEquipesDummy(codesCategories: number[]): Promise<void> {
    if (codesCategories.length === 0) {
      return;
    }

    const { data: dummies, error: errDummy } = await this.supabase
      .from('Equipes')
      .select('Code_Equipe')
      .in('Code_Categorie', codesCategories)
      .ilike('Nom_Equipe', 'Dummy%');

    if (errDummy) {
      throw new Error(`Lecture des équipes Dummy échouée : ${errDummy.message}`);
    }

    const codesDummy = (dummies ?? []).map(e => Number(e.Code_Equipe));
    if (codesDummy.length === 0) {
      return;
    }

    // Supprime les matchs des équipes Dummy (domicile ou extérieur)
    const { error: errMatchsDom } = await this.supabase
      .from('Matchs')
      .delete()
      .in('Equipe_Domicile', codesDummy);
    if (errMatchsDom) {
      throw new Error(`Suppression des matchs Dummy (domicile) échouée : ${errMatchsDom.message}`);
    }

    const { error: errMatchsExt } = await this.supabase
      .from('Matchs')
      .delete()
      .in('Equipe_Exterieure', codesDummy);
    if (errMatchsExt) {
      throw new Error(`Suppression des matchs Dummy (extérieur) échouée : ${errMatchsExt.message}`);
    }

    // Supprime les équipes Dummy elles-mêmes
    const { error: errDelDummy } = await this.supabase
      .from('Equipes')
      .delete()
      .in('Code_Equipe', codesDummy);
    if (errDelDummy) {
      throw new Error(`Suppression des équipes Dummy échouée : ${errDelDummy.message}`);
    }
  }

  /**
   * Supprime toutes les équipes et catégories d'une saison donnée.
   * Les équipes rattachées aux catégories de la saison sont supprimées en premier,
   * puis les catégories elles-mêmes.
   */
  async purgerSaison(saison: string): Promise<{ equipesSupprimees: number; categoriesSupprimees: number }> {
    // 1) Récupère les catégories de la saison
    const { data: categories, error: errCat } = await this.supabase
      .from('Categories')
      .select('Code_Categorie')
      .eq('Saison', saison);

    if (errCat) {
      throw new Error(`Lecture Categories (purge) échouée : ${errCat.message}`);
    }

    const codesCategories = (categories ?? []).map(c => Number(c.Code_Categorie));

    let equipesSupprimees = 0;

    if (codesCategories.length > 0) {
      // 2) Récupère les équipes de ces catégories (pour effacer leurs matchs)
      const { data: equipes, error: errListeEq } = await this.supabase
        .from('Equipes')
        .select('Code_Equipe')
        .in('Code_Categorie', codesCategories);

      if (errListeEq) {
        throw new Error(`Lecture Equipes (purge) échouée : ${errListeEq.message}`);
      }

      const codesEquipes = (equipes ?? []).map(e => Number(e.Code_Equipe));

      // 3) Supprime les matchs de ces équipes (domicile ou extérieur)
      if (codesEquipes.length > 0) {
        const { error: errMatchsDom } = await this.supabase
          .from('Matchs')
          .delete()
          .in('Equipe_Domicile', codesEquipes);
        if (errMatchsDom) {
          throw new Error(`Suppression Matchs (purge) échouée : ${errMatchsDom.message}`);
        }

        const { error: errMatchsExt } = await this.supabase
          .from('Matchs')
          .delete()
          .in('Equipe_Exterieure', codesEquipes);
        if (errMatchsExt) {
          throw new Error(`Suppression Matchs (purge) échouée : ${errMatchsExt.message}`);
        }
      }

      // 4) Supprime les équipes rattachées à ces catégories
      const { error: errEquipes, count } = await this.supabase
        .from('Equipes')
        .delete({ count: 'exact' })
        .in('Code_Categorie', codesCategories);

      if (errEquipes) {
        throw new Error(`Suppression Equipes (purge) échouée : ${errEquipes.message}`);
      }
      equipesSupprimees = count ?? 0;

      // 5) Supprime les catégories de la saison
      const { error: errDelCat, count: countCat } = await this.supabase
        .from('Categories')
        .delete({ count: 'exact' })
        .eq('Saison', saison);

      if (errDelCat) {
        throw new Error(`Suppression Categories (purge) échouée : ${errDelCat.message}`);
      }

      return { equipesSupprimees, categoriesSupprimees: countCat ?? 0 };
    }

    return { equipesSupprimees: 0, categoriesSupprimees: 0 };
  }

}
