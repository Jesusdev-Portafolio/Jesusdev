import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

 @Input() project: Project;

  ngOnInit(): void {
  }

}
