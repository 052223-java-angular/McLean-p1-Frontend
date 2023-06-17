import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//actual nightmare:
export class AuthInterceptorService implements HttpInterceptor {

  //calling next.handle means that we are passing control to the next interceptor in the chain, if there is one
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.token;

    if(!token) {
      return next.handle(request);
    }

    const requestOne = request.clone({
      headers: request.headers.set('auth-token', `${token}`),
    });

    return next.handle(requestOne);
  }
}
