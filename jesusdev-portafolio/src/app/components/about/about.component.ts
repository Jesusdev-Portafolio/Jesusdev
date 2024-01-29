import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { LogoItem } from 'src/app/core/models/logoItem';
import { Theme } from 'src/app/core/models/theme';
import { LogoService } from 'src/app/services/logo.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  theme$ : Observable<Theme>;
  logos: LogoItem[] = [];

  aboutObjectTransloco = {aboutText: "", tools: ""};

  @ViewChild('text') text?: ElementRef;

  constructor(
    private themeService: ThemeService,
    private logoService: LogoService, 
    private transloco: TranslocoService, 
    private renderer: Renderer2) { }

 
    @HostListener('window:scroll', [])
    checkIfElementIsInViewport(){

      const textElement = this.text.nativeElement;
      const bounding = textElement.getBoundingClientRect();
  
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      ){  
          if(textElement.classList.contains("hide-text")){
            this.renderer.removeClass(textElement, "hide-text");
            this.renderer.addClass(textElement, "show-text");
            this.renderer.addClass(textElement, "animate__fadeIn");
          }
         
          
      }
  
    }


  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.getLogos();
    this.setTextLanguajeFromTransloco();
  }

  ngAfterViewInit(): void {
   this.checkIfElementIsInViewport();
 }


  getLogos(){
    this.logoService.getLogos().subscribe({
      next:(logos)  => this.logos = logos 
    })
  }

  setTextLanguajeFromTransloco(){
      this.transloco.selectTranslateObject("about").subscribe({
        next:(aboutObject)=>{
            this.aboutObjectTransloco = aboutObject;
        }
      })
  }

  //escuchar para cuando este on scroll mostar el efecto fade in
 

}
