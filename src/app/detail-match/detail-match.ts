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
  form: FormGroup;
  // @ViewChildren('champ') champs!: QueryList<ElementRef<HTMLInputElement>>;

  sliderControl = new FormControl(0); // <-- déclaration ici
  separator: string = " / ";
  nomEquipeConnectee: string = "";
  Lieu: any;
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

  constructor(private router: Router,
    private globalService: GlobalService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService,
    private location: Location) {
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras.state as {
      Lieu: string; CA: string; NA: string, DM: string, SD: number, SE: number
      , ED: number, EE: number // Valeurs venant de Resultats 

    };
    console.log('State reçu dans le constructeur :', state);
    this.nomAdversaire = state.NA;
    this.Lieu = state.Lieu;
    this.codeAdversaire = state.CA;
    this.DateMatch = state.DM;
    this.ScoreArray[0] = state.SD;
    this.ScoreArray[1] = state.SE;
    //this.Score = state.Score;
    this.form = this.fb.group({
      tableau: this.fb.array(this.creerTableau(5, 2))
    });
  }

  ngOnInit(): void {
    this.nomEquipeConnectee = this.globalService.getEquipeConnectee().nom;

    console.log("paramètres reçus :", this.Lieu, this.codeAdversaire, this.ScoreArray);

    if (this.ScoreArray[0] != null) {   // Score déjà saisi mais on ne reçoit que le score
      this.iVisibleSlider = this.ScoreArray[0] + this.ScoreArray[1] + 1;
      this.globalService.loadScoreMatch(this.Lieu, Number(this.codeAdversaire));
      this.match$ = this.globalService.getScoreMatch();


      this.match$.pipe(filter(score => score !== null), // ignore la valeur initiale 
        take(1)   // ne prend qu’un seul score 
      )
        .subscribe(score => {
          //console.log("subscribe activé");
          if (!score)
            return; // Ne rien faire si score est null ou undefined 

          this.match = score;
          console.log('Score reçu :', this.match);
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
  }

  onScoreChange(i: number, colonne: number, value: string) {
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
      if (this.iVisibleSlider < 5) { // Si moins de 5 sets joués
        if (this.sets[i][0] < 25 && this.sets[i][1] < 25) {              // Pas assez de points
          this.bValidScore = false;
          console.log('Pas assez de points dans set', i + 1);
        }
      }
      else { // 5ème set
        if (this.sets[i][0] < 15 && this.sets[i][1] < 15) {              // Pas assez de points
          this.bValidScore = false;
          console.log('Pas assez de points dans set', i + 1);
        }
      }
      if (Math.abs(this.sets[i][0] - this.sets[i][1]) < 2) {  // Moins de 2 points d'écart
        this.bValidScore = false;
        console.log('Moins de 2 points d\'écart dans set', i + 1);
      }
      // Pas d'erreur détectée, on compte le set gagné
      if (this.sets[i][0] > this.sets[i][1])
        this.ScoreArray[0]++;
      //setsGagne[0]++;
      else
        this.ScoreArray[1]++;
      //setsGagne[1]++;
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

  openSnackBar() {
    this.snackBar.open('Action effectuée !', 'Fermer', {
      duration: 2000, // 2 secondes
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  effacerSet() {
    this.iVisibleSlider--;
    this.bMatchGagne = false;     // On peut rejouer des sets
    if (this.sets[this.iVisibleSlider - 1][0] > this.sets[this.iVisibleSlider - 1][1])
      this.ScoreArray[0]--;
    else
      this.ScoreArray[1]--;

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
    console.log('Scores validés :', this.sets);

    if (this.bScoreModifiable == false) {
      var messagePopup = 'Le score a déjà été saisi par l\'adversaire. Voulez-vous vraiment le confirmer ?';
    }
    else
      var messagePopup = 'Confirmez-vous le score saisi ?';

    this.dialogService.confirm('Confirmation', messagePopup, false).subscribe(result => {
      if (result) {
        console.log('Score confirmée');
        let ED = this.globalService.getEquipeConnectee().code;
        let EE = Number(this.codeAdversaire);
        //let SD = 
        if (this.Lieu == "E") {
          EE = this.globalService.getEquipeConnectee().code;
          ED = Number(this.codeAdversaire);
        }
        if (this.bScoreModifiable == false) {
          this.globalService.confirmerScoreMatch(this.Lieu, ED, EE);    // Confirmation du score déjà saisi
        }
        else {
          this.globalService.enregistrerScoreMatch(this.Lieu, ED, EE, this.ScoreArray, this.sets);
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
    this.sets[i - 1][j]++;
    if (this.sets[i - 1][j] == this.sets[i - 1][1 - j] - 1)    // moins de 2 points d'écart, on augmente l'autre set
      this.sets[i - 1][1 - j]++;
    if (this.sets[i - 1][j] > 25)                       // Au delà de 25, il faut 2 points d'écart
      this.sets[i - 1][1 - j] = this.sets[i - 1][j] - 2;
  }

  retourPagePrecedente(){
    this.location.back(); // Retourne à la page précédente
  }
}
