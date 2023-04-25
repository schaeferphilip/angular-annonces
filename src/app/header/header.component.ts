import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../_services/state.service';
import { StorageService } from '../_services/storage.service';
import { TitleService } from '../_services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "Titre par défaut"
  displayLogout = false

  constructor(
    private titleService: TitleService,
    private stateService: StateService,
    private storageService: StorageService,
    private router: Router
    ) {  }
  
  ngOnInit(): void {
    this.titleService.currentTitle.subscribe(title => this.title = title)
    this.stateService.isLoggedIn.subscribe(isLoggedIn => this.displayLogout = isLoggedIn)
    if (this.storageService.isLoggedIn())
      this.displayLogout = true
    else
      this.displayLogout = false
  }

  logout(): void{
    this.storageService.clean()
    this.router.navigate(['login'])
  }
}
