import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   @ViewChild('wtf') wtf!: ElementRef;
   theme$ : Observable<Theme>;

   private mainTextEs = ["<span class='color-secundario'>Soy</span> <span class='color-principal'>Jesus</span> <span class='color-secundario'>y soy</span> <span class='color-principal' style='margin-left: 46px !important'>Desarrollador</span> <span class='color-secundario'>web</span>"];
   private mainTextEn = ["<span class='color-secundario'>I'm</span> <span class='color-principal'>Jesus</span> <span class='color-secundario'>and I'm</span> <span class='color-principal' style='margin-left: 46px !important'>a web</span> <span class='color-secundario'>Developer</span>"];
   
  private cvEs = "https://drive.google.com/file/d/1OXPTWILPnmd42zWahnvfGSXrw95nLYUI/view?usp=sharing";
  private cvEn = "https://drive.google.com/file/d/1mEx338W_N2jOJtW3IwxJ9N1s6xKBjaQg/view?usp=sharing";

  //esto es para cuando entra al componente
   mainText = this.transLocoService.getActiveLang() === 'es' ? this.mainTextEs : this.mainTextEn; 
   cv       = this.transLocoService.getActiveLang() === 'es' ? this.cvEs : this.cvEn;
   
   showButtons = false;
   isLightTheme = true;



   constructor(private renderer :Renderer2, private themeService: ThemeService, private transLocoService : TranslocoService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.cambiarIdiomaMainText();
  }

  cambiarIdiomaMainText(){ //esto es para cuando cambia el lenguaje un observable
    this.transLocoService.langChanges$.subscribe({
      next: (activeLang) => {
        this.mainText = (activeLang === 'es') ? this.mainTextEs : this.mainTextEn;
        this.cv       = this.transLocoService.getActiveLang() === 'es' ? this.cvEs : this.cvEn;
      }
    });
  }

}
