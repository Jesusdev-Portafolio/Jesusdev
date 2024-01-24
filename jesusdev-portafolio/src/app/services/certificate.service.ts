import { Injectable } from '@angular/core';
import { Certificate } from '../core/models/certificate';
import { from, map, switchMap, tap } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  webDesign = "";
  microServices = "";

  private certificates: Certificate[] = [
    {label1: "AZ - 900", imgSource:"/assets/certificates/az-900_cert.png", link: "https://www.credly.com/badges/0cfd81d7-a7a5-4512-bb73-1f460ffc45dd"},
    {label1: this.webDesign, imgSource:"/assets/certificates/free_code_camp_cert.png", link: "https://www.freecodecamp.org/certification/fcc99682023-66c9-47cb-9cbf-3fc92f923375/responsive-web-design"},
    {label1: "Angular", imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-2940f691-1e50-4732-9f92-e8400a189c35/"},
    {label1: "NGRX", imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-8947071f-26c0-46c0-b69b-bba0eba01271/"},
    {label1: "RXJS", imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-597f16c3-563d-4d1d-b662-f1900e6fe137/"},
    {label1: "Asp.Net Core", imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-38fae234-f99e-4a2e-8777-60d48ab39a13/"},
    {label1: this.microServices, imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-612711c4-f88d-4be2-8386-2062fb4e133c/"},
    {label1: "SQLServer", imgSource:"/assets/certificates/udemy_cert_no_lines.png", link: "https://www.udemy.com/certificate/UC-8dbec6c9-d744-475c-a849-0ccc234dc8a8/"},


  ];

  //certificates$ = from([this.certificates]);

  constructor(private translocoService: TranslocoService) { }



  getCertificates(){
    return this.translocoService.langChanges$.pipe(
      map((lang) => {
        if(lang === "es"){
          this.microServices = "Microservicios";
          this.webDesign = "Diseño Web"
        }
        else{
          this.microServices = "Microservices";
          this.webDesign = "Web Design"
        }
          this.certificates[1].label1  = this.webDesign;
          this.certificates[6].label1 = this.microServices;
        return this.certificates;
      })
      
    );
  }

}
