import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstellationPayload } from '../dtmodels/constellation-payload';
import { Observable } from 'rxjs';
import { Auth } from '../dtmodels/auth';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  setConstellation(payload: ConstellationPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/locations/create`, payload);
  }

}
