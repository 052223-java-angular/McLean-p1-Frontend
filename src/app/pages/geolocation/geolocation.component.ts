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
      { id: 1, name: "New York, NY", longitude: 40.7, latitude: -74.0 },
      { id: 2, name: "Wuhan, China", longitude: 30.6, latitude: 114.1 },
      { id: 3, name: "London, England", longitude: 51.5, latitude: -0.2 },
      { id: 4, name: "Vienna, Austria", longitude: 48.2, latitude: 16.4 },
      { id: 5, name: "Paris, France", longitude: 48.9, latitude: 2.3 },
      { id: 6, name: "Cairo, Egypt", longitude: 30.0, latitude: 31.2 },
      { id: 7, name: "Mecca, Saudi Arabia", longitude: 21.5, latitude: 39.8 },
      { id: 8, name: "Delhi, India", longitude: 28.7, latitude: 77.2 },
      { id: 9, name: "Pretoria, South Africa", longitude: -25.8, latitude: 28.2 },
      { id: 10, name: "Moscow, Russia", longitude: 55.7, latitude: 37.5 },
      { id: 11, name: "Cusco, Peru", longitude: -13.5, latitude: -72.0 },
      { id: 12, name: "Okinawa, Japan", longitude: 26.3, latitude: 127.8 }
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
      this.geolocationService.getGeolocation().subscribe({
        next: data => {
          this.retrievedLocations = data;
        },
        error: err => console.log(err)
      })
      
      this.addLocationForm = this.fb.group({
        name: '',
        longitude: '',
        latitude: '',
      })
    }

    submit() {
      console.log("Form submitted")
      console.log(this.geolocationForm.value['geolocation']);
      console.log(this.geolocationForm.value['geolocation'].longitude);
      console.log(this.geolocationForm.value['geolocation'].latitude);

      const payload: GeolocationPayload = {
        name: this.geolocationForm.controls['geolocation'].value.name,
        longitude: this.geolocationForm.controls['geolocation'].value.longitude,
        latitude: this.geolocationForm.controls['geolocation'].value.latitude,
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
      console.log(this.addLocationForm.controls['name'].value);
      console.log(this.addLocationForm.controls['longitude'].value);

      const payload: GeolocationPayload = {
        name: this.addLocationForm.controls['name'].value,
        longitude: this.addLocationForm.controls['longitude'].value,
        latitude: this.addLocationForm.controls['latitude'].value,
        home: false
      }

      this.geolocationService.setGeolocation(payload).subscribe({
        next: value => {
          this.toastr.success('Geolocation set');
        },
        error: error => {
          this.toastr.error(error.error.message);
        }
      })
    }

    deleteLocation(location:any) {
      console.log(location.name);
      console.log(location.latitude);
      console.log(location.id);

      this.geolocationService.deleteGeolocation(location.id).subscribe({
        next: value => {
          this.retrievedLocations = this.retrievedLocations.filter((loc: { id: any; }) => loc.id !== location.id);
        },
        error: error => {
          this.toastr.error(error.error.message);
        }
      })
    }

    updateLocation(location:any) {
      console.log(location.name);
      console.log(location.latitude);
    }

}
