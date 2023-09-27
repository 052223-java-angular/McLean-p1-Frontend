import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RegisterPayload } from '../dtmodels/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';
import { LoginPayload } from '../dtmodels/login-payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //baseUrl = environment.apiBaseUrl;
  baseUrl = 'http://localhost:8080/mclean/api';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  //Auth is the principal class
  register(payload: RegisterPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/register`, payload);
  }

  //observe type tells us what we are interested in observing, must add httpresponse<t>
  login(payload: LoginPayload): Observable<HttpResponse<Auth>> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload, { observe : 'response'});
  }

}
