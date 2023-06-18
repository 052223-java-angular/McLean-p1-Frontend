import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from '../dtmodels/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';
import { LoginPayload } from '../dtmodels/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  //Auth is the principal class
  register(payload: RegisterPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/register`, payload);
  }

  login(payload: LoginPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload);
  }

  //https://vegibit.com/how-to-make-http-requests-in-angular-using-observables/

}
