import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: JSON.parse(token).token
                }
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
