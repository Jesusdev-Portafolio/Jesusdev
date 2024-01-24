import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { LanguajeService } from './services/languaje.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

    //TODO:usar animate para transiciones
    //TODO: hacer una logica por si lo ve en mobile para darle un boton a descargar porque si no no lo podra ver
    //TODO: hacer el responsive para mobile y ver que voy a hacer con los certificados poner un slider o algo.

    
export class AppComponent implements OnInit {

  title = 'jesusdev-portafolio';

  constructor(private renderer: Renderer2, private themeService: ThemeService, private languajeService: LanguajeService){}
  
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
      }
    })
    


  }

  getUserLanguaje(){
    this.languajeService.getLanguajeForUser();
  }

}
