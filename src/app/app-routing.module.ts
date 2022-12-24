import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilComponent } from './appareil/appareil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AuthentificationComponent,pathMatch:'full'},
  {path:'appareil',component:AppareilComponent},
  {path:'**',redirectTo:'appareil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
