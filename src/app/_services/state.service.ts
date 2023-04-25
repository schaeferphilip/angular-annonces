import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private loggedInSource = new BehaviorSubject(false)
  isLoggedIn = this.loggedInSource.asObservable()

  constructor() { }

  changeLoggedState(isLoggedIn: boolean){
    this.loggedInSource.next(isLoggedIn)
  }
}
