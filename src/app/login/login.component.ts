import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { TitleService } from '../_services/title.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:string = ""
  password:string = ""
  isLoginFailed: boolean = false
  isLoggedIn: boolean = false
  message:string = ""

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private titleService: TitleService
    ){}

  ngOnInit(): void {
    this.titleService.changeTitle("Login")
  }

  doLogin() {
    this.authService.login(this.login, this.password).subscribe({
      next: data => {
        this.storageService.saveUser(data)
        this.isLoggedIn = true
        this.isLoginFailed = false
        this.storageService.saveToken(data.access_token)
        this.storageService.getToken()
        this.router.navigate(['annonces'])
      },
      error: err => {
        this.isLoginFailed = true
        this.message = "Identifiants incorrects"
        console.log("Erreur login")
      }
    })
  }

  adrouter(idx: number): void{
    this.router.navigate(['annonces' + idx])
  }
}
