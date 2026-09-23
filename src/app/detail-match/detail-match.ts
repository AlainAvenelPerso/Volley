import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global';
import { Score } from '../../models/models';
import { Observable } from 'rxjs';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { MatSliderModule, } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { filter, take } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';
import { Location } from '@angular/common'
import { AppSession, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detail-match',
  imports: [
    MatSliderModule, FormsModule, MatButtonToggleModule, ReactiveFormsModule, CommonModule, MatSnackBarModule, 
  ],
  templateUrl: './detail-match.html',
  styleUrl: './detail-match.scss',
})
export class DetailMatch {
  @ViewChildren('myInput') myInputs!: QueryList<ElementRef>;
  @ViewChild('reportDateInput') reportDateInput?: ElementRef<HTMLInputElement>;
  form: FormGroup;
  // @ViewChildren('champ') champs!: QueryList<ElementRef<HTMLInputElement>>;

  sliderControl = new FormControl(0); // <-- déclaration ici
  separator: string = " / ";
  nomEquipeConnectee: string = "";
  Lieu: any;
  codeEquipeConnectee: any; // Code de l'équipe connectée
  codeAdversaire: any; // Code de l'adversaire reçu en paramètre
  nomAdversaire: any;
  ScoreArray: number[] = [0, 0];
  Score: string = "";
  match$!: Observable<Score>;
  match!: Score;
  threshold = 200; // px nécessaires pour valider
  position = 0; // valeur par défaut au centre
  sliderValue = 0;
  state = "left";
  iVisibleSlider: number = 1; // Position du slider visible (1 = premier sur les 5 possibles)
  bValidScore: boolean = false;
  bMatchGagne: boolean = false;     // Le score fait qu'il ne pourra pas y avoir plus de sets car gagné
  DateMatch: string = "";
  sets: number[][] = [];
  bScoreModifiable: boolean = true; // Par défaut, le score est modifiable
  bScoreDejaValideParTous: boolean = false; // Par défaut, le score n'a pas été validé par les 2 équipes
  forceShowZeroScores: boolean = false;
  nouvelleDateReport: string = '';

  constructor(public router: Router,
    private globalService: GlobalService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService,
    private auth: AuthService,
    private location: Location) {
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras.state as {
      Lieu: string; CA: string; NA: string, DM: string, SD: number, SE: number
      , ED: number, EE: number, NED : string, NEE : string // Valeurs venant de Resultats 

    };
    console.log('State reçu dans le constructeur :', state);
    this.nomAdversaire = state.NA;
    this.Lieu = state.Lieu;
    this.codeAdversaire = state.CA;
    this.DateMatch = state.DM;
    this.nouvelleDateReport = this.DateMatch ? String(this.DateMatch).slice(0, 10) : '';
    this.ScoreArray[0] = state.SD;
    this.ScoreArray[1] = state.SE;
    //this.Score = state.Score;
    this.form = this.fb.group({
      tableau: this.fb.array(this.creerTableau(5, 2))
    });
    if (state.ED != null && state.EE != null) {
      this.nomEquipeConnectee = state.NED;      // Nom équipe domicile
      this.nomAdversaire = state.NEE;         // Nom équipe extérieure
      this.Lieu = "D";   // On a l'info directement, donc on affiche dans le bon sens
      this.codeEquipeConnectee = state.ED;     // Code équipe domicile
      this.codeAdversaire = state.EE;         // Code équipe extérieure
      this.globalService.loadScoreMatch('D', state.ED, state.EE);   // Chargement du score du match pour l'équipe D, on recevra le score dans match$ et on pourra initialiser les sets
      this.match$ = this.globalService.getScoreMatch();
    }
    else{
      const session = this.auth.current;
      this.nomEquipeConnectee = session.nom_equipe?.toString() ?? "";
      this.codeEquipeConnectee = session.code_equipe;
      this.iVisibleSlider = this.ScoreArray[0] + this.ScoreArray[1] + 1;
      this.globalService.loadScoreMatch(this.Lieu, this.codeEquipeConnectee, Number(this.codeAdversaire));
      this.match$ = this.globalService.getScoreMatch();
    }

      this.match$.pipe(filter(score => score !== null), // ignore la valeur initiale 
        take(1)   // ne prend qu’un seul score 
      )
        .subscribe(score => {
          //console.log("subscribe activé");
          if (!score)
            return; // Ne rien faire si score est null ou undefined 

          this.forceShowZeroScores = true;
          this.match = score;

          const setsDomicile = this.match.Sets_Domicile ?? 0;
          const setsExterieur = this.match.Sets_Exterieur ?? 0;
          this.iVisibleSlider = setsDomicile + setsExterieur + 1;
          if (setsDomicile === 0 && setsExterieur === 0) {
            this.iVisibleSlider = 2;
          }

          console.log('Score reçu :', this.match);
          this.ScoreArray[0] = setsDomicile;
          this.ScoreArray[1] = setsExterieur;
          if (this.match.VE == true && this.match.VD == true) {   // Score déjà validé par les 2 équipes
            this.bScoreDejaValideParTous = true;
            this.bScoreModifiable = false;   // Score non modifiable
          }
          else if ((this.Lieu == "D" && this.match.VE == true) || (this.Lieu == "E" && this.match.VD == true)
          ) {
            this.bScoreModifiable = false;   // Score non modifiable
            console.log('Score non modifiable');
          }
          else {
            this.bScoreModifiable = true;    // Score modifiable : On le fait en dépit du defaut car on passe ici d'abord
            console.log('Score modifiable');
          }
          //console.log('iVisibleSlider défini à :', this.iVisibleSlider);
          for (let i = 0; i < this.iVisibleSlider - 1; i++) {       // Récupère le score déjà saisi
            if (!this.sets[i]) { this.sets[i] = [0, 0]; }
            this.sets[i][0] = (this.match as any)[`S${i + 1}D`];
            this.sets[i][1] = (this.match as any)[`S${i + 1}E`];
          }
          this.bValidScore = true;      // On part du principe que le score est valide
          console.log('Sets initialisés à :', this.sets);
        });
    
  }

  ngOnInit(): void {
    const refreshScoreState = () => {
      const session = this.auth.current;
      this.nomEquipeConnectee = session.nom_equipe?.toString() ?? this.nomEquipeConnectee;
      if (session.code_equipe) {
        this.codeEquipeConnectee = Number(session.code_equipe);
      }

      const lieuNormalise = String(this.Lieu ?? '').trim().toUpperCase();
      this.Lieu = lieuNormalise;

      if (!this.codeEquipeConnectee || !this.codeAdversaire) {
        return;
      }

      this.globalService.getScoreMatch()
        .pipe(filter(score => score !== null), take(1))
        .subscribe(score => {
          if (!score) {
            return;
          }

          this.forceShowZeroScores = true;

          if (score.VE === true && score.VD === true) {
            this.bScoreDejaValideParTous = true;
            this.bScoreModifiable = false;
          } else if ((this.Lieu === 'D' && score.VE === true) || (this.Lieu === 'E' && score.VD === true)) {
            this.bScoreDejaValideParTous = false;
            this.bScoreModifiable = false;
          } else {
            this.bScoreDejaValideParTous = false;
            this.bScoreModifiable = true;
          }
        });

      this.globalService.loadScoreMatch(this.Lieu, Number(this.codeEquipeConnectee), Number(this.codeAdversaire));
    };

    if (this.auth.currentCodeEquipe) {
      refreshScoreState();
    } else {
      this.auth.session$.pipe(filter(s => !!s.code_equipe), take(1)).subscribe(() => refreshScoreState());
    }
    //console.log("paramètres reçus :",  this.Lieu, this.codeAdversaire, this.ScoreArray);
//   this.auth.session$.pipe(take(1)).subscribe(session => {
//   if (session.code_equipe) {
//     console.log("Une équipe est connectée :", session.nom_equipe, session.code_equipe);
//     //  this.nomEquipeConnectee = this.globalService.getEquipeConnectee().nom;
//     // this.codeEquipeConnectee = this.globalService.getEquipeConnectee().code;
//      this.nomEquipeConnectee = session.nom_equipe?.toString() ?? "";
//     this.codeEquipeConnectee = session.code_equipe;
//     console.log("Params équipes :", this.codeEquipeConnectee, this.codeAdversaire);
//     if (this.ScoreArray[0] != null) {   // Score déjà saisi mais on ne reçoit que le score
//       this.iVisibleSlider = this.ScoreArray[0] + this.ScoreArray[1] + 1;
//       this.globalService.loadScoreMatch(this.Lieu, this.codeEquipeConnectee, Number(this.codeAdversaire));
//       this.match$ = this.globalService.getScoreMatch();

//       this.match$.pipe(filter(score => score !== null), // ignore la valeur initiale 
//         take(1)   // ne prend qu’un seul score 
//       )
//         .subscribe(score => {
//           //console.log("subscribe activé");
//           if (!score)
//             return; // Ne rien faire si score est null ou undefined 

//           this.match = score;
//           console.log('Score reçu :', this.match);
//           if (this.match.VE == true && this.match.VD == true) {   // Score déjà validé par les 2 équipes
//             this.bScoreDejaValideParTous = true;
//             this.bScoreModifiable = false;   // Score non modifiable
//           }
//           else if ((this.Lieu == "D" && this.match.VE == true) || (this.Lieu == "E" && this.match.VD == true)
//           ) {
//             this.bScoreModifiable = false;   // Score non modifiable
//             console.log('Score non modifiable');
//           }
//           else {
//             this.bScoreModifiable = true;    // Score modifiable : On le fait en dépit du defaut car on passe ici d'abord
//             console.log('Score modifiable');
//           }
//           //console.log('iVisibleSlider défini à :', this.iVisibleSlider);
//           for (let i = 0; i < this.iVisibleSlider - 1; i++) {       // Récupère le score déjà saisi
//             if (!this.sets[i]) { this.sets[i] = [0, 0]; }
//             this.sets[i][0] = (this.match as any)[`S${i + 1}D`];
//             this.sets[i][1] = (this.match as any)[`S${i + 1}E`];
//           }
//           this.bValidScore = true;      // On part du principe que le score est valide
//           console.log('Sets initialisés à :', this.sets);
//         });
//     }
//   } else {
//     console.log("Aucune équipe connectée");
//   }
// });


   
   
  }

  onScoreChange(i: number, colonne: number, value: string) {
    this.forceShowZeroScores = false;
    console.log(`Score changé pour le set ${i}, colonne ${colonne} :`, value);
    this.sets[i - 1][colonne] = Number(value);
    // Validation du score
    this.bValidScore = true;      // Score valide par défaut
    this.bMatchGagne = false;     // On remet à faux, on va vérifier
    this.ScoreArray[0] = 0;     // Réinitialisation des scores
    this.ScoreArray[1] = 0;
    //let setsGagne = [0, 0];   // Nombre de sets gagnés par chaque équipe
    for (let i = 0; i < this.iVisibleSlider - 1; i++) {
      this.globalService.logDebug(`Vérification du set ${i + 1} :`, this.sets[i]);
      if (this.sets[i][0] < 0 || this.sets[i][1] < 0) {       // Score négatif
        this.bValidScore = false;
        this.globalService.logDebug('Score négatif détecté dans set', i + 1);
      }
      const seuilSet = i < 4 ? 25 : 15; // set 1..4 => 25, set 5 => 15
      if (this.sets[i][0] < seuilSet && this.sets[i][1] < seuilSet) {
        this.bValidScore = false;
        console.log('Pas assez de points dans set', i + 1);
      }
      if (Math.abs(this.sets[i][0] - this.sets[i][1]) < 2) {  // Moins de 2 points d'écart
        this.bValidScore = false;
        console.log('Moins de 2 points d\'écart dans set', i + 1);
      }
      // Pas d'égalité: on compte uniquement le vrai gagnant du set
      if (this.sets[i][0] > this.sets[i][1]) {
        this.ScoreArray[0]++;
      } else if (this.sets[i][1] > this.sets[i][0]) {
        this.ScoreArray[1]++;
      }
    }
    // Vérification du nombre des sets gagnés
    if (this.ScoreArray[0] < 3 && this.ScoreArray[1] < 3) {   // Match pas encore gagné, on peut continuer}
      this.bValidScore = false;
      this.globalService.logDebug('Match pas encore gagné', this.iVisibleSlider, this.bMatchGagne, this.ScoreArray);
    }
    if (this.ScoreArray[0] == 3 || this.ScoreArray[1] == 3)    // Match déjà gagné
      this.bMatchGagne = true;
    //this.Score = this.ScoreArray[0] + " / " + this.ScoreArray[1];

  }

  canAddSet(): boolean {
    if (!this.bScoreModifiable || this.bScoreDejaValideParTous || this.bMatchGagne) {
      return false;
    }

    if (this.iVisibleSlider > 5) {
      return false;
    }

    const currentSetIndex = this.iVisibleSlider - 2;
    const currentSet = this.sets[currentSetIndex];

    if (!currentSet) {
      return false;
    }

    const scoreA = Number(currentSet[0] ?? 0);
    const scoreB = Number(currentSet[1] ?? 0);
    const scoreMax = Math.max(scoreA, scoreB);
    const ecart = Math.abs(scoreA - scoreB);
    const seuil = currentSetIndex < 4 ? 25 : 15;

    return scoreMax >= seuil && ecart >= 2;
  }

  ajouterSet(): void {
    if (!this.canAddSet() || this.iVisibleSlider >= 6) {
      return;
    }

    const currentSetIndex = this.iVisibleSlider - 2;
    if (!this.sets[currentSetIndex]) {
      this.sets[currentSetIndex] = [0, 0];
    } else {
      this.sets[currentSetIndex][0] = Number(this.sets[currentSetIndex][0] ?? 0);
      this.sets[currentSetIndex][1] = Number(this.sets[currentSetIndex][1] ?? 0);
    }

    this.iVisibleSlider++;
    if (!this.sets[this.iVisibleSlider - 2]) {
      this.sets[this.iVisibleSlider - 2] = [0, 0];
    }
    this.bValidScore = false;
  }

  openSnackBar() {
    this.snackBar.open('Action effectuée !', 'Fermer', {
      duration: 2000, // 2 secondes
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  effacerSet() {
    this.bMatchGagne = false;     // On peut rejouer des sets

    if (this.iVisibleSlider <= 2) {
      this.iVisibleSlider = 2;
      this.sets[0] = [0, 0];
      this.ScoreArray[0] = 0;
      this.ScoreArray[1] = 0;
      return;
    }

    this.iVisibleSlider--;
    if (this.sets[this.iVisibleSlider - 1][0] > this.sets[this.iVisibleSlider - 1][1]) {
      this.ScoreArray[0]--;
    } else if (this.sets[this.iVisibleSlider - 1][1] > this.sets[this.iVisibleSlider - 1][0]) {
      this.ScoreArray[1]--;
    }

    this.sets[this.iVisibleSlider - 1][0] = 0;
    this.sets[this.iVisibleSlider - 1][1] = 0;

  }
  // Génère un tableau 5x2 de FormControls
  creerTableau(lignes: number, colonnes: number): FormArray[] {
    return Array.from({ length: lignes }, () =>
      this.fb.array(Array.from({ length: colonnes }, () => new FormControl('')))
    );
  }

  get tableau(): FormArray {
    return this.form.get('tableau') as FormArray;
  }

  getColonnes(ligneIndex: number): FormArray {
    return this.tableau.at(ligneIndex) as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  validationScore() {
    this.forceShowZeroScores = true;
    for (let i = 0; i < this.iVisibleSlider - 1; i++) {
      if (!this.sets[i]) {
        this.sets[i] = [0, 0];
      }
      this.sets[i][0] = Number(this.sets[i][0] ?? 0);
      this.sets[i][1] = Number(this.sets[i][1] ?? 0);
    }

    console.log('Scores validés :', this.sets);

    if (this.bScoreModifiable == false) 
      var messagePopup = 'Le score a déjà été saisi par l\'adversaire. Voulez-vous vraiment le confirmer ?';
    else
      var messagePopup = 'Confirmez-vous le score saisi ?';

    this.dialogService.confirm('Confirmation', messagePopup, false).subscribe(result => {
      if (result) {
        console.log('Score confirmée');
        const codeEquipeSession = Number(this.codeEquipeConnectee ?? this.auth.currentCodeEquipe ?? 0);
        let ED = codeEquipeSession;
        let EE = Number(this.codeAdversaire);
        //let SD = 
        if (this.Lieu == "E") {
          EE = codeEquipeSession;
          ED = Number(this.codeAdversaire);
        }
        if (this.bScoreModifiable == false) {
          this.globalService.confirmerScoreMatch(this.Lieu, ED, EE);    // Confirmation du score déjà saisi
          this.bScoreDejaValideParTous = true;   // Le score est maintenant validé par les 2 équipes
        }
        else {
          const scoreNormalise: number[] = [
            Number(this.ScoreArray[0] ?? 0),
            Number(this.ScoreArray[1] ?? 0),
          ];

          const setsNormalises: number[][] = Array.from({ length: 5 }, (_, index) => [
            Number(this.sets[index]?.[0] ?? 0),
            Number(this.sets[index]?.[1] ?? 0),
          ]);

          this.globalService.enregistrerScoreMatch(this.Lieu, ED, EE, scoreNormalise, setsNormalises);
        }

        this.snackBar.open('Opération réussie', 'OK', {
          duration: 2000
        });

      } else {
        console.log('Score annulée');
      }
    });
  }

  // Slider activé
  onSliderChangeEvent(event: number) {

    console.log('visible slider#, Valeur récupérée:', this.iVisibleSlider, event);
    let iGagnant = 99;        // Valeur impossible par défaut
    if (event == -1) {      // Set pour l'équipe recevante
      iGagnant = 0;
      this.ScoreArray[0]++;
    }
    else {
      iGagnant = 1;   // Set pour l'équipe visiteuse    
      this.ScoreArray[1]++;
    }

    // Si score à null, on le met à 0
    this.ScoreArray[0] = this.ScoreArray[0] ?? 0;
    this.ScoreArray[1] = this.ScoreArray[1] ?? 0;

    if (this.iVisibleSlider < 5)
      this.sets[this.iVisibleSlider - 1][iGagnant] = 25;
    else
      this.sets[this.iVisibleSlider - 1][iGagnant] = 15;
    this.sets[this.iVisibleSlider - 1][1 - iGagnant] = 0;     // Je voudrais vide !!!!

    this.iVisibleSlider++;
    this.position = 0;          // On remet le slider au centre
    this.cdr.detectChanges(); // force Angular à mettre à jour la vue
    const inputsArray = this.myInputs.toArray();    // Tableau des inputs
    console.log('index input :', inputsArray, 2 * (this.iVisibleSlider - 2) + (1 - iGagnant));
    inputsArray[2 * (this.iVisibleSlider - 2) + (1 - iGagnant)].nativeElement.focus(); // focus sur le 2ème input
    this.bValidScore = false;   // Nouveau set, score non valide par défaut
    //this.renderer.selectRootElement(this.myInput.nativeElement).focus();

    /*     const index = (this.iVisibleSlider - 1) * 2 + (iGagnant - 1); // calcul index dans QueryList
        const champ = this.champs.toArray()[index];
        champ.nativeElement.focus(); */

  }

  augmenteScore(i: number, j: number) {
    console.log('Augmente score de ', i, j);
    if ((this.sets[i - 1][0] ?? 0) === 0 && (this.sets[i - 1][1] ?? 0) === 0) {
      const scoreInitial = i < 5 ? 25 : 15;
      this.sets[i - 1][j] = scoreInitial;
      this.sets[i - 1][1 - j] = 0;
      this.onScoreChange(i, j, String(this.sets[i - 1][j]));
      return;
    }

    this.sets[i - 1][j]++;
    if (this.sets[i - 1][j] == this.sets[i - 1][1 - j] - 1)    // moins de 2 points d'écart, on augmente l'autre set
      this.sets[i - 1][1 - j]++;
    const scoreReference = i < 5 ? 25 : 15;
    if (this.sets[i - 1][j] > scoreReference)           // Au delà du score de référence, il faut 2 points d'écart
      this.sets[i - 1][1 - j] = this.sets[i - 1][j] - 2;

    this.onScoreChange(i, j, String(this.sets[i - 1][j]));
  }

  infoEquipe(){
    this.router.navigate(['/info-equipe']);
  }

  openDateReportPicker(): void {
    if (!this.canReporterMatch()) {
      this.snackBar.open('Impossible de reporter : un score est déjà saisi', 'OK', {
        duration: 2500
      });
      return;
    }

    const input = this.reportDateInput?.nativeElement;
    if (!input) {
      return;
    }

    input.value = this.nouvelleDateReport || (this.DateMatch ? String(this.DateMatch).slice(0, 10) : '');
    if (typeof input.showPicker === 'function') {
      input.showPicker();
    } else {
      input.click();
    }
  }

  onDateReportSelected(nouvelleDate: string): void {
    this.nouvelleDateReport = (nouvelleDate ?? '').trim();
    this.reporterMatch();
  }

  reporterMatch() {
    if (!this.canReporterMatch()) {
      this.snackBar.open('Impossible de reporter : un score est déjà saisi', 'OK', {
        duration: 2500
      });
      return;
    }

    const nouvelleDate = (this.nouvelleDateReport ?? '').trim();
    if (!nouvelleDate) {
      return;
    }

    const codeEquipeSession = Number(this.codeEquipeConnectee ?? this.auth.currentCodeEquipe ?? 0);
    let ED = codeEquipeSession;
    let EE = Number(this.codeAdversaire);

    if (this.Lieu == 'E') {
      EE = codeEquipeSession;
      ED = Number(this.codeAdversaire);
    }

    this.globalService.reporterMatch(this.Lieu, ED, EE, nouvelleDate)
      .then(() => {
        this.DateMatch = nouvelleDate;
        this.snackBar.open('Match reporté', 'OK', {
          duration: 2000
        });
      })
      .catch((error: any) => {
        const message = error?.code === 'PGRST204'
          ? "La colonne Date_Report n'existe pas dans la base."
          : (error?.message ?? 'Erreur lors du report du match');

        this.snackBar.open(message, 'OK', {
          duration: 3500
        });
      });
  }

  canReporterMatch(): boolean {
    if ((Number(this.ScoreArray[0] ?? 0) + Number(this.ScoreArray[1] ?? 0)) > 0) {
      return false;
    }

    for (const set of this.sets) {
      const scoreD = Number(set?.[0] ?? 0);
      const scoreE = Number(set?.[1] ?? 0);
      if (scoreD > 0 || scoreE > 0) {
        return false;
      }
    }

    return true;
  }
  
  retourPagePrecedente(){
    this.location.back(); // Retourne à la page précédente
  }
}
