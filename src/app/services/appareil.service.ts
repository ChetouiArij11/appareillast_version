import { Appareil } from './../models/appreil.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils = [
    new Appareil('Machine à laver', 'eteint'),
    new Appareil('TV', 'allumé'),
    new Appareil('Ordinateur', 'allumé'),
    new Appareil('Micro Onde', 'eteint'),
    new Appareil('Four', 'allumé'),
    new Appareil('XBOX', 'eteint'),
    new Appareil('Hot', 'allumé'),
  ];
  isAuth= false;
 // injecter le service HttpClient pour pouvoir se connecter au serveur node
 constructor(private http: HttpClient) {
  this.chargerListAppareil().subscribe((listApp) => {
    console.log(listApp);
  });
}
  onAllumerTout(){
    this.appareils.forEach(app => {
      app.status ='allumé';

    });
  }
  onFermerTout(){
    if (confirm('Voulez-vous éteindre tout les appareils ?')) {
      this.appareils.forEach(app => {

        app.status='eteint';
      })}
  }
onSwitch(i:number){
  if (this.appareils[i].status === 'eteint') {
    this.appareils[i].status = 'allumé'
  } else {
    this.appareils[i].status = 'eteint';
  }
}
 // exemple de méthode pour lancer une requete http get qui retourne un Observable (Callback)
 chargerListAppareil() : Observable<Appareil[]>{
  return this.http.get<Appareil[]>('http://localhost:3000/appareilsAPI');
}

}



