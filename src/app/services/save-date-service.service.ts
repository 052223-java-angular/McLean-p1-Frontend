import { Injectable } from '@angular/core';
import { SaveDatePayload } from '../dtmodels/save-date-payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReadDatePayload } from '../dtmodels/read-date-payload';
import { Auth } from 'src/app/dtmodels/auth';

@Injectable({
  providedIn: 'root'
})
export class SaveDateService {
  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  saveDate(payload: SaveDatePayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/dates/create`, payload);
  }

  getDates(userId: string) {
    const dates = this.http.get<Array<ReadDatePayload>>(`${this.baseUrl}/dates/read/${userId}`);
    return dates;
  }

}
