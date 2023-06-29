import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  lat: number = 0;
  lon: number = 0;

  constructor(private httpClient: HttpClient) {  }

  ngOnInit(): void {
    if(sessionStorage.getItem('userLat') == null || sessionStorage.getItem('userLon') == null) {
      return;
    }
    this.lat = parseInt(sessionStorage.getItem('userLat')!);
    this.lon = parseInt(sessionStorage.getItem('userLon')!);
  }

  getData() {
    return this.httpClient.get(`https://www.astropical.space/api-ephem.php?lat=${this.lat}&lon=${this.lon}`);
  }

  getHorizonData() {
    return this.httpClient.get(`https://api.visibleplanets.dev/v3?latitude=${this.lat}&longitude=${this.lon}`);
  }

  getLocation() {
     return this.httpClient.get('https://ipapi.co/json/');
  }

}
