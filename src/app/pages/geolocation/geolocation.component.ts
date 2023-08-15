import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
import { GeolocationPayload } from 'src/app/dtmodels/geolocation-payload';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

    //this is the current location from api
    location: any;
    retrievedLocations: any;
    geolocationForm!: FormGroup;
    addLocationForm!: FormGroup;

    geolocations = [
      { id: 1, name: "New York, NY" },
      { id: 2, name: "Wuhan, China" },
      { id: 3, name: "London, England" },
      { id: 4, name: "Vienna, Austria" },
      { id: 5, name: "Paris, France" },
      { id: 6, name: "Cairo, Egypt" },
      { id: 7, name: "Mecca, Saudi Arabia" },
      { id: 8, name: "Delhi, India" },
      { id: 9, name: "Pretoria, South Africa" },
      { id: 10, name: "Moscow, Russia" },
      { id: 11, name: "Cusco, Peru" },
      { id: 12, name: "Okinawa, Japan" }
    ];

    constructor(
      private fb:FormBuilder, 
      private apiService: ApiService, 
      private geolocationService: GeolocationService, 
      private authService: AuthService, 
      private router: Router, 
      private toastr: ToastrService
    ) {
      this.location = [];
    }

    ngOnInit() {
      this.apiService.getLocation().subscribe((response) => {
        //gives current location
        console.log(response);
        this.location = response;
        console.log(typeof(this.location));
        //use this.location data to allow updating the settings
        console.log(this.location.latitude);
        console.log(this.location.longitude);
      })

      this.geolocationForm = this.fb.group({
        geolocation: '',
      });

      //get location data from server
      //this.geolocationService
      
      this.addLocationForm = this.fb.group({
        name: '',
        longitude: '',
        latitude: '',
      })
    }

    submit() {
      console.log("Form submitted")
      console.log(this.geolocationForm.value['geolocation']);

      const payload: GeolocationPayload = {
        name: this.geolocationForm.controls['geolocation'].value,
        //add lon/lat to array of preselected locations instead of here
        //or query the geoloc api for the long/lat of location
        longitude: 48.2,
        latitude: 16.3,
        home: false,
      }

      this.geolocationService.setGeolocation(payload).subscribe({
        next: value => {
          this.toastr.success('Geolocation set');
          this.router.navigate(['/about']);
        },
        error: error => {
          this.toastr.error(error.error.message);
        }
      });

    }

    onSubmit() {

    }

    deleteLocation(index:any) {
      console.log(index);
    }

    updateLocation(index:any) {
      console.log(index);
    }

}
