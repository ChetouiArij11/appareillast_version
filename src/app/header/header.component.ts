import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  route: any;
  constructor(){}
  onLogin(){
    setTimeout(() => {
this.isAuth=!this.isAuth;

    }, 3000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
