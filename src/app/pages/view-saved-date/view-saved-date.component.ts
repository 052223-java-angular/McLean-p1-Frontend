import { Component } from '@angular/core';

@Component({
  selector: 'app-view-saved-date',
  templateUrl: './view-saved-date.component.html',
  styleUrls: ['./view-saved-date.component.css']
})
export class ViewSavedDateComponent {

  //set the angle from api data

  constructor() { }

  get mercuryRotation() {
    return 65;
  }

  get venusRotation() {
    return 130;
  }

}
