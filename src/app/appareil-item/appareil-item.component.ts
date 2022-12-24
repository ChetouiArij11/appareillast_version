import { AppareilService } from './../services/appareil.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-item',
  templateUrl: './appareil-item.component.html',
  styleUrls: ['./appareil-item.component.css']
})
export class AppareilItemComponent implements OnInit{
  @Input() appareilName: string | undefined;
  @Input() appareilStatus:string |undefined;
  @Input() appareilIndex ! : number;

  lassttime=new Date();
  constructor(private appareilService:AppareilService){

  }
  ngOnInit(): void {

  }
  onSwitch(){
    console.log(this.appareilName);
    this.appareilService.onSwitch(this.appareilIndex);
  }
}
