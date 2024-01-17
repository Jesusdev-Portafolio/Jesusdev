import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

    //TODO:crear un theme switch service y suscribirse y con eso maniobrar a ver si lo consigo

    
export class AppComponent implements OnInit {

  title = 'jesusdev-portafolio';

  constructor(private renderer: Renderer2, private themeService: ThemeService){}
  
  ngOnInit(): void {
    this.getUserTheme();
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

}
