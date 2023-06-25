import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from 'src/app/dtmodels/register-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api-service.service';
import { GeolocationPayload } from 'src/app/dtmodels/geolocation-payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  location: any;

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLocation().subscribe((response) => {
      console.log(response);
      this.location = response;
      console.log(typeof(this.location));
      console.log(this.location.latitude);
      console.log(this.location.longitude);
      sessionStorage.setItem('userLon', this.location.longitude.toString());
      sessionStorage.setItem('userLat', this.location.latitude.toString());
    })
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  submitForm(): void {
    if(this.registerForm.invalid) {
      this.registerForm.controls['username'].markAsTouched();
      this.registerForm.controls['password'].markAsTouched();
      this.registerForm.controls['confirmPassword'].markAsTouched();
      this.registerForm.reset();
      return;
    }

    const payload: RegisterPayload = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value,
      longitude: this.location.longitude,
      latitude: this.location.latitude,
    };

    this.authService.register(payload).subscribe({
      //successful registration callback
      next: value => {
        this.toastr.success('Registration successful');

        this.router.navigate(['/login']);
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });

  }
}
