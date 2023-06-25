import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-service.service';
import { SaveDatePayload } from 'src/app/dtmodels/save-date-payload';
import { SaveDateService } from 'src/app/services/save-date-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sky-condition',
  templateUrl: './sky-condition.component.html',
  styleUrls: ['./sky-condition.component.css']
})
export class SkyConditionComponent implements OnInit {

  token: any;
  apiList: any = [];
  apiList2: any = [];

  constructor(private apiService: ApiService, private saveDateService: SaveDateService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
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

  //ra = right ascension, current 0 degrees is located in pisces
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

  submit(): void {
    //for created_at use epoch time
    const current = (new Date).getTime();

    const payload: SaveDatePayload = {
      name: 'test',
      created_at: current,
      mercury_phase: this.apiList.response[0].ra,
      venus_phase: this.apiList.response[1].ra,
      mars_phase: this.apiList.response[2].ra,
      jupiter_phase: this.apiList.response[3].ra,
      saturn_phase: this.apiList.response[4].ra,
      uranus_phase: this.apiList.response[5].ra,
      neptune_phase: this.apiList.response[6].ra,
      pluto_phase: this.apiList.response[7].ra,
      token: this.token,
    }

    this.saveDateService.saveDate(payload).subscribe({
      next: value => {
        this.toastr.success('Date saved');
        this.router.navigate(['/about']);
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });

  }

}
