import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-sky-condition',
  templateUrl: './sky-condition.component.html',
  styleUrls: ['./sky-condition.component.css']
})
export class SkyConditionComponent implements OnInit {

  //timer emits every 1 second
//   ----not my code, for testing purposes
//   private time:Observable<Date> = timer(0, 1000).pipe(map(tick => new Date()), shareReplay(1));
//
//   private hours$: Observable<number> = this.time$.pipe(map((now: Date) => now.getHours()));
//
//   private minutes$: Observable<number> = this.time$.pipe(map((now: Date) => now.getMinutes()));
//
//   private seconds$: Observable<number> = this.time$.pipe(map((now: Date) => now.getSeconds()));

  apiList: any;

  constructor(private apiService: ApiService) { }

//   ----not my code, for testing purposes
//   get time$() {
//     return this.time;
//   }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.apiList = data;
    });
  }

}
