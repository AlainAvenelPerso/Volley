import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  currentUser$!: import('rxjs').Observable<string | null>;

  constructor(private auth: AuthService) {
    this.currentUser$ = this.auth.currentUser$;
  }
}
