import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsPayload } from '../dtmodels/comments-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = 'http://localhost:8080/mclean/api';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/comments/comments`);
  }

  postComments(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/comments/comment`, payload);
  }

  deleteComment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/comments/comment/${id}`);
  }

  updateComment(id: string, payload: CommentsPayload): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/comments/comment/${id}`, payload);
  }

  

}
