import { Injectable } from '@angular/core';
import { LogoItem } from '../core/models/logoItem';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  myLogos: LogoItem[] = [
    {label1 : "Visual", label2: "Studio", imgSource: "../../../assets/logos/Gimp_logos_acomodados/VsCode.png"},
    {label1 : "HTML", imgSource: "../../../assets/logos/Gimp_logos_acomodados/html.png"},
    {label1 : "CSS", imgSource: "../../../assets/logos/Gimp_logos_acomodados/CSS3.png"},
    {label1 : "Bootstrap", imgSource: "../../../assets/logos/Gimp_logos_acomodados/bootstrap.png"},
    {label1 : "TypeScript", imgSource: "../../../assets/logos/Gimp_logos_acomodados/ts.png"},
    {label1 : "Angular", imgSource: "../../../assets/logos/Gimp_logos_acomodados/angular.png"},
    {label1 : "RxJs", imgSource: "../../../assets/logos/Gimp_logos_acomodados/rxjs.png"},
    {label1 : "C-Sharp", imgSource: "../../../assets/logos/Gimp_logos_acomodados/c-sharp.png"},
    {label1 : ".Net Core", imgSource: "../../../assets/logos/Gimp_logos_acomodados/NET_Core.png"},
    {label1 : "Entity", label2: "Framework", imgSource: "../../../assets/logos/Gimp_logos_acomodados/EFCore.png"},
    {label1 : "XUnit", imgSource: "../../../assets/logos/Gimp_logos_acomodados/Xunit.png"},
    {label1 : "SQLServer ", imgSource: "../../../assets/logos/Gimp_logos_acomodados/SqlServer.png"},
    {label1 : "Postgre", label2:"SQL", imgSource: "../../../assets/logos/Gimp_logos_acomodados/postgreeSql.png"},
    {label1 : "Redis", imgSource: "../../../assets/logos/Gimp_logos_acomodados/redis.png"},
    {label1 : "MongoDB", imgSource: "../../../assets/logos/Gimp_logos_acomodados/MongoDB.png"},
    {label1 : "Azure", label2: "", imgSource: "../../../assets/logos/Gimp_logos_acomodados/Azure.png"},

  ];

  myLogos$ = from([this.myLogos]); 

  constructor() { 

  }

  getLogos(){
    return this.myLogos$;
  }
}
