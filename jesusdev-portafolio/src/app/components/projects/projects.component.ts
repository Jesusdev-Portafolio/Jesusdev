import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

type NewType = Theme;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  theme$: Observable<Theme>;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;

  }

}
