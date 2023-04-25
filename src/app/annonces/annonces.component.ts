import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AnnoncesService } from '../_services/annonces.service';
import { TitleService } from '../_services/title.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})


export class AnnoncesComponent implements OnInit {
  annonces=null
  ads=""
  listads: Array<string>=[]
  adsdata: Array<string>=[]
  datelist: Array<string>=[]
  updatelist: Array<string>=[]
  pricelist: Array<string>=[]
  name=""
  date=""
  price=""
  update=""
  //idx=0
  pagead=false

  constructor(private titleService:TitleService,
    private annoncesService: AnnoncesService, private router: Router){}
    
  
  ngOnInit(): void {
      this.titleService.changeTitle("Liste des annonces")
      this.annoncesService.getAnnonces().subscribe(res=>{
        console.log(res),
      this.annonces=res,
      res.forEach((result: any) => this.listads.push(result.title)),
      res.forEach((result: any) => this.datelist.push(result.dateCreated)),
      res.forEach((result: any) => this.updatelist.push(result.lastUpdated)),
      res.forEach((result: any) => this.pricelist.push(result.price)),
      //res.forEach((result: any) => console.log(result.title)),
      this.ads = 'API connection successfull: ' + res[3].title,
      console.log(this.annonces)}
      )
  }

  annoncepage(idx: number): void {
    //this.router.navigate(['annonces/' + this.idx])
    this.pagead = false
    //this.router.navigate(['login/'])
    // this.adsdata.forEach((result: any) => this.name = result.title)
    // this.adsdata.forEach((result: any) => this.date = result.dateCreated)
    // this.adsdata.forEach((result: any) => this.price = result.price)
    //this.loginComponent.adrouter(this.idx)
    //this.idx++
  }

  returnads(idx:number): void {
    //this.router.navigate(['annonces'])
    //this.router.navigate(['login'])
    this.name = JSON.stringify(this.listads[idx])
    this.date = JSON.stringify(this.datelist[idx])
    this.update = JSON.stringify(this.updatelist[idx])
    this.price = JSON.stringify(this.pricelist[idx])
    this.pagead = true
    
  }

  adreturn(): void {
    //this.router.navigate(['annonces'])
    //this.router.navigate(['login'])
    this.pagead = false
    
  }
}
