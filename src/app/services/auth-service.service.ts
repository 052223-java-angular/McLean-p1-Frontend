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
  private readonly LS_KEY = 'authToken';
  private userId: string | null = null;

  constructor(
    private http: HttpClient
  ) { 
    const storedUserId = localStorage.getItem('userId');
    if(storedUserId) {
      this.setUserId(storedUserId);
    }
  }

  //Auth is the principal class
  register(payload: RegisterPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/register`, payload);
  }

  //observe type tells us what we are interested in observing, must add httpresponse<t>
  login(payload: LoginPayload): Observable<HttpResponse<Auth>> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload, { observe : 'response'});
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.LS_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.LS_KEY);
  }

  clearAuthToken(): void {
    localStorage.removeItem(this.LS_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  //mostly for comparing post user id with logged in user id for delete/edit func

  setUserId(userId: string):void {
    this.userId = userId;
    localStorage.setItem('userId', userId);
  }

  getUserId(): string | null {
    return this.userId;
  }

  clearSession(): void {
    this.userId = null;
    localStorage.removeItem('userId');
  }

  isLoggingIn(): boolean {
    return !!this.userId;
  }

}
