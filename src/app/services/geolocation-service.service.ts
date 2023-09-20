import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationPayload } from '../dtmodels/geolocation-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  //baseUrl = environment.apiBaseUrl;
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private httpClient: HttpClient) { }

  setGeolocation(payload: GeolocationPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/locations/location`, payload);
  }

  //get request for locations to display
  getGeolocation(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/locations/locations`)
  }

  deleteGeolocation(id: any): Observable<any> {
    console.log(`${this.baseUrl}/locations/locations/${id}`);
    return this.httpClient.delete<any>(`${this.baseUrl}/locations/locations/${id}`)
  }

  updateGeolocation(id: any, payload: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/locations/locations/${id}`, payload)
  }

}
