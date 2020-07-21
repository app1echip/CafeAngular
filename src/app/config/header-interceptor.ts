import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'


@Injectable({
    providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token')
        if (token) { req = req.clone({ setHeaders: { Authorization: JSON.parse(token).token } }) }
        return next.handle(req)
    }
}
