import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { LanguajeService } from './services/languaje.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

    //TODO:usar animate para transiciones
    //TODO: hacer una logica por si lo ve en mobile para darle un boton a descargar porque si no no lo podra ver
    //TODO: Cambiar el boton principal dark que lo odio de lo feo que es

    
export class AppComponent implements OnInit {

  title = 'jesusdev-portafolio';

  spinnerBgColor: string;
  spinnerColor: string;

  constructor(private renderer: Renderer2, private themeService: ThemeService, private languajeService: LanguajeService, private spinner: NgxSpinnerService){}
  
  ngOnInit(): void {
    this.getUserTheme();
    this.getUserLanguaje();   
  }

  getUserTheme(){
    this.themeService.getThemeForUser();

    this.themeService.theme$.subscribe({
      next:({themeToRemove, themeToAdd}) =>{
        this.renderer.removeClass(document.body,themeToRemove);
        this.renderer.addClass(document.body, themeToAdd);

        this.configureSpinnerStyleBasedOnTheme(themeToAdd);

      }
    })
  }

  configureSpinnerStyleBasedOnTheme(theme :string){
      if(theme === "light"){
        this.spinnerBgColor = "rgba(255,255,255,.7)"
        this.spinnerColor = "rgba(33, 150, 243, 1)"
      }

      else{
        this.spinnerBgColor = "rgba(65,65,65,.7)";
        this.spinnerColor = "rgba(29,242,114,1)";
      }
  }

  getUserLanguaje(){
    this.languajeService.getLanguajeForUser();
  }

}
