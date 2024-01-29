import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, finalize, Observable, pipe } from "rxjs";
import { BusyService } from "src/app/services/busy.service";


@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

    constructor(private busyService: BusyService){}

    //req lo saliente, next lo entrante
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('emailexists')){
            this.busyService.busy();
        }
        return next.handle(req).pipe(
            finalize(() => {
              this.busyService.idle(); 
            })
        );

      
    }   
}