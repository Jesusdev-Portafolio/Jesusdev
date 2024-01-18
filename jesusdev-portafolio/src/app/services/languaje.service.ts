import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  defaultLanguaje = 'es';

  constructor( private translocoService: TranslocoService) { }

  getLanguajeForUser(){ // this is for startup app
    let languaje = localStorage.getItem('languaje');
    if (languaje === null || languaje !== "es" && languaje !== "en" ){
        console.log("LanguajeService: no hay idioma establecido, estableciendo idioma por defecto: " + this.defaultLanguaje);
        this.translocoService.setActiveLang(this.defaultLanguaje);
        return;
    };
    console.log("LanguajeService: estableciendo idioma de usuario: " + languaje);
    this.translocoService.setActiveLang(languaje);
  }

  setLanguajeForUser(languaje :string){ // this one is for toogle button
    localStorage.setItem('languaje', languaje);
    this.translocoService.setActiveLang(languaje);
  }

  chooseOpositeLanguaje(languaje: string){
    return languaje === 'es' ? 'en' : 'es';
  }

  getCurrentLanguajeValue(){

    let languaje = localStorage.getItem('languaje'); //no me gusta mucho esto :(
    return languaje === 'es' ? 'es' 
      : languaje === 'en' ? 'en' 
      : this.defaultLanguaje;
  }

}
