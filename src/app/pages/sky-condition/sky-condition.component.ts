import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-service.service';
import { SaveDatePayload } from 'src/app/dtmodels/save-date-payload';

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

  apiList: any = [];
  apiList2: any = [];

  constructor(private apiService: ApiService) {
  }

//   ----not my code, for testing purposes
//   get time$() {
//     return this.time;
//   }

  ngOnInit(): void {
  //: save-data-payload
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      //JSON.parse(data);
      this.apiList = data;
    });
    this.apiService.getHorizonData().subscribe((moreData) => {
      console.log(moreData);
      this.apiList2 = moreData;
    });
  }

  get aresRotation() {
    return 0;
  }

  get taurusRotation() {
    return 30;
  }

  get geminiRotation() {
    return 60;
  }

  get cancerRotation() {
    return 90;
  }

  get leoRotation() {
    return 120;
  }

  get virgoRotation() {
    return 150;
  }

  get libraRotation() {
    return 180;
  }

  get scorpioRotation() {
    return 210;
  }

  get sagittariusRotation() {
    return 240;
  }

  get capricornRotation() {
    return 270;
  }

  get aquariusRotation() {
    return 300;
  }

  get piscesRotation() {
    return 330;
  }

  //ra = right ascension
  //ideally would include sun, moon, ceres as all 12 celestial orbs hold importance
  get mercuryRotation() {
    return this.apiList.response[0].ra;
  }

  get venusRotation() {
    return this.apiList.response[1].ra;
  }

  get marsRotation() {
    return this.apiList.response[2].ra;
  }

  get jupiterRotation() {
    return this.apiList.response[3].ra;
  }

  get saturnRotation() {
    return this.apiList.response[4].ra;
  }

  get uranusRotation() {
    return this.apiList.response[5].ra;
  }

  get neptuneRotation() {
    return this.apiList.response[6].ra;
  }

  get plutoRotation() {
    return this.apiList.response[7].ra;
  }

  //need a button to save date
  submit(): void {
    //create save-data-payload from data called from api
    //for created_at use epoch time
    //let numDate: number = Date.parse(date);

    //https://www.geeksforgeeks.org/angular-10-formatdate-method/

    //payload = this.apiList.response[4].const
    //this.apiList.response[5].const
    console.log(this.apiList);
  }

  //need a save button on this page

}
