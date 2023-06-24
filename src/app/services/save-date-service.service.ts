import { Injectable } from '@angular/core';
import { SaveDatePayload } from '../dtmodels/save-date-payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveDateService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  saveDate(payload: SaveDatePayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/dates/create`, payload);
  }

}
