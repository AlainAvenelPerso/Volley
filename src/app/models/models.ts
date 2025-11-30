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
  Adversaire: string;
  Date: Date;
  SetsPour: number = 0;
  SetsContre: number = 0;

    constructor(Lieu: string, Adversaire: string, Date: Date) {
    this.Lieu = Lieu;
    this.Adversaire = Adversaire;
    this.Date = Date;
  }
}