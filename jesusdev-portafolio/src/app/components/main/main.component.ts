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
   
   mainText = this.transLocoService.getActiveLang() === 'es' ? this.mainTextEs : this.mainTextEn;
   
   showButtons = false;
   isLightTheme = true;



   constructor(private renderer :Renderer2, private themeService: ThemeService, private transLocoService : TranslocoService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.cambiarIdiomaMainText();
  }

  cambiarIdiomaMainText(){ //no lo pilla si lo hago de la forma tradicional asi que lo hare asi
    this.transLocoService.langChanges$.subscribe({
      next: (activeLang) => this.mainText = (activeLang === 'es') ? this.mainTextEs : this.mainTextEn
    });
  }

}
