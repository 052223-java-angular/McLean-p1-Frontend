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

    //need to read all location based on localstorage token
    geolocations = [
      { id: 1, name: "Ares" },
    ];

    constructor(private fb:FormBuilder, private apiService: ApiService) {
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
    }

}
