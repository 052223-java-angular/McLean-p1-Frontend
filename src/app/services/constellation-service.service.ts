import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstellationPayload } from '../dtmodels/constellation-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  setConstellation(payload: ConstellationPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/favorites/create`, payload);
  }

}
