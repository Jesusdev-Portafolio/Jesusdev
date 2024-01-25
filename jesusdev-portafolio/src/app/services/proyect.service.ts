import { Injectable } from '@angular/core';
import { Project } from '../core/models/project';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  projects : Project[] = [
    {
       name: "Informatic",
       description: "informaticDescription", //this is the transloco key so with this i change the info
       imgSource: "/assets/projects/infromatic-responsive-img.png",
       link:"#",
       githubLink:"https://github.com/Jesusdev-Portafolio/Informatic",
       features: ["html", "css", "typescript", "angular","rxjs", "c#", ".net core","entity framework", "redis", "postgresql", "firebase",]
    }
  ];

  projects$ = from([this.projects]);



  constructor() { }

  getProjects(){
    return this.projects$;
  }
}
