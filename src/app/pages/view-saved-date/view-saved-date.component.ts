import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { SaveDateService } from 'src/app/services/save-date-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-saved-date',
  templateUrl: './view-saved-date.component.html',
  styleUrls: ['./view-saved-date.component.css']
})
export class ViewSavedDateComponent implements OnInit {

  token: any;
  apiList: any = [];
  savedDates: any;
  savedDate!: FormControl;
  savedDateForm!: FormGroup;

  constructor(private fb:FormBuilder, private apiService: ApiService, private saveDateService: SaveDateService) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.apiList = data;
    });

    const userId = 'd2af3afb-34ec-4f83-86be-68a0fc401c5d';
    this.saveDateService.getDates(userId).subscribe({
      next: (response) => {
        this.savedDates = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.savedDate = new FormControl(" ");
    this.savedDateForm = this.fb.group({
      savedDate: this.savedDate,
    });
  }

  submit() {

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

}
