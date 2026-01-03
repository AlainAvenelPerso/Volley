export class Categorie {
  codeCategorie: number;
  nomCategorie: string;

  constructor(codeCategorie: number, nomCategorie: string) {
    this.codeCategorie = codeCategorie;
    this.nomCategorie = nomCategorie;
  }
}

export class Equipe {
  code: number;
  nom: string;
  codeCategorie: number;
  nomCategorie: string;

  constructor(code: number, nom: string, codeCategorie: number, nomCategorie: string) {
    this.code = code;
    this.nom = nom;
    this.codeCategorie = codeCategorie;
    this.nomCategorie = nomCategorie;
  }
}

export class Match {
  Lieu: string;
  CodeAdversaire: number;
  Adversaire: string;
  Date: Date;
  SetsPour: number = 0;
  SetsContre: number = 0;

  constructor(Lieu: string, CodeAdversaire: number, Adversaire: string, Date: Date) {
    this.Lieu = Lieu;
    this.CodeAdversaire = 0;
    this.Adversaire = Adversaire;
    this.Date = Date;
  }
}

export class Score {
  Sets_Domicile: number;
  Sets_Exterieur: number;
  S1D: number;
  S2D: number;
  S3D: number;
  S4D: number;
  S5D: number;
  S1E: number;
  S2E: number;
  S3E: number;
  S4E: number;
  S5E: number;

  constructor(Sets_Domicile: number, Sets_Exterieur: number,
    S1D: number, S2D: number, S3D: number, S4D: number, S5D: number,
    S1E: number, S2E: number, S3E: number, S4E: number, S5E: number) {
    this.S1D = S1D;
    this.S2D = S2D;
    this.S3D = S3D;
    this.S4D = S4D;
    this.S5D = S5D;
    this.S1E = S1E;
    this.S2E = S2E;
    this.S3E = S3E;
    this.S4E = S4E;
    this.S5E = S5E;
    this.Sets_Domicile = Sets_Domicile;
    this.Sets_Exterieur = Sets_Exterieur;
  }
}

export type TClassement = {
  points: number;
  gas: number;
  gap: number;
  codeEquipe: number;
  nbJoues: number;
  nbGagnes: number;
  nbPerdus: number;
  nbForfaits: number;
  penalites: number;
  nomEquipe: string;
};

export type Joueur = {
Nom: string;
Prenom: string;
Mail1: string;
TelPortable: string;
};

export type Gymnase = {
  Nom_Gymnase: string;
  Adresse: string;
  Commune: string;
  X: number;
  Y: number;
}

export type InfosEquipe = {
  Nom_Equipe: string;
  Code_Categorie: number;
  Jour_Match: string;
  Heures_Match: string;
  capitaine: Joueur;
  gymnase: Gymnase;
}

export type Resultat = {
  Nom_Equipe: string;
  Equipe_Domicile: number;
  Equipe_Exterieure: number;
  Sets_Domicile: number;
  Sets_Exterieur: number;
}
