import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { Project } from '../../core/models/project';
import { ProyectService } from 'src/app/services/proyect.service';

type NewType = Theme;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  theme$: Observable<Theme>;
  projects: Project[] = [];

  constructor(private themeService: ThemeService, private projectService: ProyectService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe({
      next:(projects) => this.projects = projects
    })
  }

}
