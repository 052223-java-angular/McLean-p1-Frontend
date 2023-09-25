import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/comments/comments`);
  }

  postComments(payload: any) {
    return this.http.post<any>(`${this.baseUrl}/comments/comment`, payload);
  }

  

}
