import {Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theme$;
  constructor(private themeService: ThemeService) { }


  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
  }

  

}


