import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

    location: any;

    token: any;

    geolocation!: FormControl;

    geolocationForm!: FormGroup;

    geolocations = [
      { id: 1, name: "New York, NY" },
      { id: 2, name: "Wuhan, China" },
      { id: 3, name: "London, England" },
      { id: 4, name: "Vienna, Austria" },
    ];

    constructor(private fb:FormBuilder, private apiService: ApiService, private geolocationService: GeolocationService, private authService: AuthService, private router: Router, private toastr: ToastrService) {
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
        this.token = sessionStorage.getItem('token');
        this.geolocation = new FormControl(" ");
      })
      this.geolocationForm = this.fb.group({
        geolocation: this.geolocation,
      });
    }

    submit() {
      console.log("Form submitted")
      console.log(this.geolocationForm.value);

      const payload: GeolocationPayload = {
        name: this.geolocationForm.controls['geolocation'].value,
        //add lon/lat to array of preselected locations instead of here
        longitude: 48.2,
        latitude: 16.3,
        token: this.token
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

      //give user option to select from possible choices of saved locations
      //then set this user lon/lat in session
    }

}
