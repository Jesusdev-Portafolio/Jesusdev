import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from '../models/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLightTheme = true; //default 
  
  constructor( private renderer: Renderer2, private themeService: ThemeService) {}

  ngOnInit(): void {
      this.setSwicherThemeChecked();
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

 





}
