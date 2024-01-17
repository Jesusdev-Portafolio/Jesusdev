import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   mainText = ["<span class='color-secundario'>Soy</span> <span class='color-principal'>Jesus</span> <span class='color-secundario'>y soy</span> <span class='color-principal' style='margin-left: 46px !important'>Desarrollador</span> <span class='color-secundario'>web</span>"];
   showButtons = false;
   isLightTheme = true;
   @ViewChild('wtf') wtf!: ElementRef;
   theme$ : Observable<Theme>;

   constructor(private renderer :Renderer2, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    //this.changeTheme();
  }

 changeTheme(){
  this.themeService.theme$.subscribe({
    next:({themeToRemove, themeToAdd}) => {
      this.renderer.removeClass(this.wtf.nativeElement, themeToRemove);
      this.renderer.addClass(this.wtf.nativeElement, themeToAdd);
    }
  })
 }

  

}
