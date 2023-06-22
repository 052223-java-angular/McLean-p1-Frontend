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
  apiList2: any;

  constructor(private apiService: ApiService) {
    this.apiList = [];
    this.apiList2 = [];
  }

//   ----not my code, for testing purposes
//   get time$() {
//     return this.time;
//   }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.apiList = data;
    });
    this.apiService.getHorizonData().subscribe((moreData) => {
      console.log(moreData);
      this.apiList2 = moreData;
    });
  }

  //need a button to save date
  submit(): void {
    //create save-data-payload from data called from api

  }

  //need a save button on this page

}
