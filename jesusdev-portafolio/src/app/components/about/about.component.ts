import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class AboutComponent implements OnInit {

  theme$ : Observable<Theme>;
  logos: LogoItem[] = [];
  @ViewChild('backgroundThemeAbout') backgroundThemeAbout!: ElementRef;

  constructor(private translocoService: TranslocoService, private themeService: ThemeService, private logoService: LogoService) { }


  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.getLogos();
  }

  getLogos(){
    this.logoService.getLogos().subscribe({
      next:(logos)  => this.logos = logos 
    })
  }


}
