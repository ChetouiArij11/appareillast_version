import { AppareilService } from './../services/appareil.service';
import { Appareil } from './../models/appreil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  isAuth = false;
  appareils :Appareil[];


  constructor(private appareilService:AppareilService){
   this.appareils=this.appareilService.appareils;

  }
  ngOnInit(): void {


  }
  onAllumerTout(){
    this.appareilService.onAllumerTout();
     }
  onFermerTout(){
    this.appareilService.onFermerTout();
  }

}
