import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Certificate } from 'src/app/core/models/certificate';
import { Theme } from 'src/app/core/models/theme';
import { CertificateService } from 'src/app/services/certificate.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit, OnDestroy {

  theme$ : Observable<Theme>;
  certificates: Certificate[] = [];
  subscription$: Subscription;

  constructor(private themeService: ThemeService, private certService: CertificateService) { }


  ngOnInit(): void {
  this.theme$ = this.themeService.theme$;
  this.getCertificates();

  } 

  getCertificates(){
    this.subscription$ = this.certService.getCertificates().subscribe({
      next:(certificates) => this.certificates = certificates
    });

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }



}
