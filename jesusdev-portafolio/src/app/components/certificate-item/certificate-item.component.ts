import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { tap } from 'rxjs';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent implements OnInit {

  @Input() description: string;
  @Input() link: string;
  @Input() imgSource: string;

  constructor( private transloco: TranslocoService) { }

  ngOnInit(): void {
  }

  goForCertificate(url: string){
    this.popupCenter(url, "cert", 900, 500);
  }

  popupCenter(url: string, title: string, w: number, h:number) {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title, 
      `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )

  

    if(!newWindow || newWindow.closed || typeof newWindow.closed=='undefined') 
    { 
      this.transloco.selectTranslateObject('studies.popUpBlocked').pipe(
        tap(console.log)
      ).subscribe({
        next: (msg) => alert(msg)
      });

    }
    if (window.focus) newWindow.focus();
}

}
