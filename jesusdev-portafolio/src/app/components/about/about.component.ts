import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  theme$ : Observable<Theme>;
  @ViewChild('backgroundThemeAbout') backgroundThemeAbout!: ElementRef;

  constructor(private translocoService: TranslocoService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
  }


}
