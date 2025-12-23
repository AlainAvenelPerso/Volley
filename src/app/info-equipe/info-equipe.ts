import { Component } from '@angular/core';

@Component({
  selector: 'app-info-equipe',
  imports: [],
  templateUrl: './info-equipe.html',
  styleUrl: './info-equipe.scss',
})
export class InfoEquipe {

  callNumber() { window.location.href = 'tel:+33123456789'; }
  
}
