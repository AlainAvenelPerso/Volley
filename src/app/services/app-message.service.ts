import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppMessageService {
  private _message$ = new BehaviorSubject<string | null>(null);
  readonly message$ = this._message$.asObservable();

  show(message: string, duration = 4000) {
    this._message$.next(message);
    if (duration > 0) {
      setTimeout(() => this.clear(), duration);
    }
  }

  clear() {
    this._message$.next(null);
  }
}
