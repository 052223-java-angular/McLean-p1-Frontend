import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient: HttpClient;

  //httpBackend allows bypassing of auth-interceptor
  constructor(private httpBackend: HttpBackend) {
    this.httpClient = new HttpClient(httpBackend);
  }

  getData() {
    return this.httpClient.get('https://www.astropical.space/api-ephem.php?lat=36.1&lon=-80.7');
  }

  getHorizonData() {
    return this.httpClient.get('https://api.visibleplanets.dev/v3?latitude=36.1&longitude=-80.7')
  }

}
