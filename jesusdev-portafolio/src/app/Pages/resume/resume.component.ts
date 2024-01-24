import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  lang$ = this.translocoService.langChanges$;
  theme$ : Observable<Theme>;
  
  cvUrlEs = "../../../assets/Jesus_Noguera_CV_es.pdf";
  cvUrlEn = "../../../assets/Jesus_Noguera_CV_en.pdf";

 

  constructor(private translocoService: TranslocoService, private themeService: ThemeService) { }
 
  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    
  }

  

}
