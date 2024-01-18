import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from '../models/theme';
import { LanguajeService } from '../../services/languaje.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLightTheme = true; //default 
  isSpanishLanguaje = true; // default
  
  constructor( private renderer: Renderer2, private themeService: ThemeService, private LanguajeService: LanguajeService) {}

  ngOnInit(): void {
      this.setSwicherThemeChecked();
      this.setSwicherLanguajeChecked();
   }

  setSwicherThemeChecked(){
     this.isLightTheme = this.themeService.getCurrentThemeValue().themeToAdd === "light";
   }
  toogleTheme(){
    let theme = this.themeService.getCurrentThemeValue();
    
    theme.themeToRemove = this.themeService.chooseOpositeTheme(theme.themeToRemove);
    theme.themeToAdd = this.themeService.chooseOpositeTheme(theme.themeToAdd);

    this.renderer.removeClass(document.body,theme.themeToRemove);
    this.renderer.addClass(document.body,theme.themeToAdd);
    this.themeService.setThemeForUser(theme.themeToAdd);

  }

  setSwicherLanguajeChecked(){
    this.isSpanishLanguaje = this.LanguajeService.getCurrentLanguajeValue() === "es";
  }

  toogleLanguaje(){
    let languaje = this.LanguajeService.getCurrentLanguajeValue();
    languaje = this.LanguajeService.chooseOpositeLanguaje(languaje);
    this.LanguajeService.setLanguajeForUser(languaje);
  }

 





}
