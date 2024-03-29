import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITheme, Theme} from '../core/models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSource = new BehaviorSubject<Theme>(null);
  theme$ = this.themeSource.asObservable();
  tema = new Theme('dark', 'light'); //default si no hay tema en el LocalStorage 

  constructor() { }

  getThemeForUser(){
    let theme = localStorage.getItem('theme');
    if (theme === null || theme !== "light" && theme !== "dark"){
        console.log("ThemeService: no hay tema establecido, estableciendo tema por defecto: " + this.tema.themeToAdd);
        this.themeSource.next(this.tema);
        return;
    };

    console.log("ThemeService: estableciendo tema de usuario: " + theme);
    this.themeSource.next(new Theme( this.chooseOpositeTheme(theme), theme))
  }

 
  setThemeForUser(theme :string){
    localStorage.setItem('theme', theme);
    this.themeSource.next(new Theme( this.chooseOpositeTheme(theme), theme))
  }

  getCurrentThemeValue(){
    return this.themeSource.value;
  }

  chooseOpositeTheme(theme: string){
    return theme === 'light' ? 'dark' : 'light';
  }
}


