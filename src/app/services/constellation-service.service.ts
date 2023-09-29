import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstellationPayload } from '../dtmodels/constellation-payload';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  //baseUrl = environment.apiBaseUrl;
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  setConstellation(payload: ConstellationPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/favorites/favorite`, payload);
  }

  getConstellation(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/favorites/favorite`);
  }

}
