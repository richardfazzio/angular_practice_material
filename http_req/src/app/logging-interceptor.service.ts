import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoggingInterceptorSevice implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing request');
        console.log(req.url);
        return next.handle(req).pipe(tap(evt => {
            if (evt.type === HttpEventType.Response) {
                console.log('Response body: ', evt.body);
            }
        }))
    }
}