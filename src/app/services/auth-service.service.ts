import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RegisterPayload } from '../dtmodels/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';
import { LoginPayload } from '../dtmodels/login-payload';
import { GeolocationPayload } from '../dtmodels/geolocation-payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //baseUrl = environment.apiBaseUrl;
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  //Auth is the principal class
  register(payload: RegisterPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/register`, payload);
  }

  //HttpClient.get() does not specify any options.  By default, ite returns the JSON data contained in the response body
  //In order to get header information, we must specify it to HttpClient

  //observe type tells us what we are interested in observing, must add httpresponse<t>
  login(payload: LoginPayload): Observable<HttpResponse<Auth>> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload, { observe : 'response'});
  }

  //https://vegibit.com/how-to-make-http-requests-in-angular-using-observables/

  //at some point have to check if token already exists in localStorage and clear() it then set new token

  setHome(locPayload: GeolocationPayload): Observable<GeolocationPayload> {
    return this.http.post<GeolocationPayload>(`${this.baseUrl}/locations/create`, locPayload);
  }

}
