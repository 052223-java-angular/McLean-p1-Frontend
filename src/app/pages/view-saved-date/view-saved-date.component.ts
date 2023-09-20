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

  apiList: any = [];
  savedDates: any;
  selectedDates: any;
  savedDate!: FormControl;
  savedDateForm!: FormGroup;

  // dropDownData = {
  //   mercury_rotation: this.savedDate.value.mercury_rotation,
  //   venus_rotation: this.savedDate.value.venus_rotation,
  //   mars_rotation: this.savedDate.value.mars_rotation,
  //   jupiter_rotation: this.savedDate.value.jupiter_rotation,
  //   saturn_rotation: this.savedDate.value.saturn_rotation,
  //   uranus_rotation: this.savedDate.value.uranus_rotation,
  //   neptune_rotation: this.savedDate.value.neptune_rotation,
  //   pluto_rotation: this.savedDate.value.pluto_rotation,
  // }

  constructor(
    private fb:FormBuilder, 
    private apiService: ApiService, 
    private saveDateService: SaveDateService
  ) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.apiList = data;
    });

    this.saveDateService.getDates().subscribe({
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
    //savedDate is bound to ngValue of the drop down form
    this.selectedDates = this.savedDate.value;
    console.log(this.selectedDates);
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

  get savedMercuryRotation() {
    return this.apiList.response[0].ra;
  }

  get savedVenusRotation() {
    return this.apiList.response[1].ra;
  }

  get savedMarsRotation() {
    return this.apiList.response[2].ra;
  }

  get savedJupiterRotation() {
    return this.apiList.response[3].ra;
  }

  get savedSaturnRotation() {
    return this.apiList.response[4].ra;
  }

  get savedUranusRotation() {
    return this.apiList.response[5].ra;
  }

  get savedNeptuneRotation() {
    return this.apiList.response[6].ra;
  }

  get savedPlutoRotation() {
    return this.apiList.response[7].ra;
  }  

}
