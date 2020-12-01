import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way');
        const modifiedRequest = req.clone({
            headers: req.headers.append('AUth-key', 'xyz')
        });
        return next.handle(modifiedRequest);
    }
}
