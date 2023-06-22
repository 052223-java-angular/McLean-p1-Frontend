import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

    location: any;

    geolocationForm!: FormGroup;

    geolocations = [
      { id: 1, name: "New York, NY" },
      { id: 2, name: "Wuhan, China" },
      { id: 3, name: "London, England" },
      { id: 4, name: "Vienna, Austria" },
    ];

    constructor(private fb:FormBuilder, private apiService: ApiService) {
      this.location = [];
    }

    ngOnInit() {
      this.apiService.getLocation().subscribe((response) => {
        console.log(response);
        this.location = response;
        console.log(typeof(this.location));
        //use this.location data to allow updating the settings
        console.log(this.location.latitude);
        console.log(this.location.longitude);
      })
      this.geolocationForm = this.fb.group({
      geolocation: [null]
      });
    }

    submit() {
      console.log("Form submitted")
      console.log(this.geolocationForm.value);

      //save location data to database based on user selection
      //probably easiest to hard code lon/lat data

      //then set this user lon/lat in session
    }

}
