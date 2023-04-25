import { Component, OnInit } from '@angular/core';
import { TitleService } from '../_services/title.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  message:string = "Une erreur est survenue"

  constructor(private titelService: TitleService){}

  ngOnInit(): void {
    this.titelService.changeTitle("Error")
  }

}




