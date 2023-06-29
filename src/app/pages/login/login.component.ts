import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from 'src/app/dtmodels/login-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Auth } from 'src/app/dtmodels/auth';
import { LocationPayload } from 'src/app/dtmodels/location-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(): void {
    //stop here if the form is invalid - maybe move .controls to after reset..
    if(this.loginForm.invalid) {
      this.loginForm.controls['username'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
      this.loginForm.reset();
      return;
    }

    const payload: LoginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    }

    this.authService.login(payload).subscribe({
      next: value => {
        console.log("logged in", value.body);

        const auth: Auth = {
          id : value.body!.id,
          username : value.body!.username,
          role : value.body!.role,
          locations : value.body!.locations,
          token: value.body!.token,
        }

        //console.log("printed locations: " + auth.locations[0].name);
        sessionStorage.setItem('token', value.body!.token);
        this.router.navigate(['/about']);
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });

  }

}
