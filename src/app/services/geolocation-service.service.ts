import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationPayload } from '../dtmodels/geolocation-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private httpClient: HttpClient) { }

  setGeolocation(payload: GeolocationPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/locations/create`, payload);
  }

}
