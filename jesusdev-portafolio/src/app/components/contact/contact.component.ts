import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  theme$: Observable<Theme>;
  constructor( private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
  }

}
