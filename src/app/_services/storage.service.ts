import { Injectable } from '@angular/core';
import { StateService } from './state.service';

const USER_COOKIE = 'user'
const TOKEN = ""


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private stateService: StateService) { }

  clean(): void {
    window.sessionStorage.clear()
    this.stateService.changeLoggedState(false)
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_COOKIE)
    window.sessionStorage.setItem(USER_COOKIE, JSON.stringify(user))
    this.stateService.changeLoggedState(true)
  }

  getUser(): void {
    let user = window.sessionStorage.getItem(USER_COOKIE)
    if(user)
      return JSON.parse(user)
  }

  isLoggedIn(): boolean {
    let user = window.sessionStorage.getItem(USER_COOKIE)
    if (user)
      return true
    return false
  }

  saveToken(token:any):void{
    window.sessionStorage.removeItem(TOKEN)
    window.sessionStorage.setItem(TOKEN,token)

    this.stateService.changeLoggedState(true)
  }

  getToken():any{
    let token = window.sessionStorage.getItem(TOKEN)
    if (token)
      return token
  }
}
