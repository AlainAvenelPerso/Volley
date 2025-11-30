import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isConnected$ = new BehaviorSubject<boolean>(false);
  private _currentUser$ = new BehaviorSubject<string | null>(null);
  
  readonly isConnected$ = this._isConnected$.asObservable();
  readonly currentUser$ = this._currentUser$.asObservable();

  setConnected(connected: boolean, username?: string) {
    this._isConnected$.next(connected);
    if (connected && username) {
      this._currentUser$.next(username);
    } else {
      this._currentUser$.next(null);
    }
  }

  isConnected(): boolean {
    return this._isConnected$.getValue();
  }

  getCurrentUser(): string | null {
    return this._currentUser$.getValue();
  }
}
