import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from 'src/app/dtmodels/login-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

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
      password: this.loginForm.controls['password'].value
    }

    this.authService.login(payload).subscribe({
      next: value => {
        console.log(value.headers.get('auth-token'));
        let jwt = value.headers.get('auth-token');
        if(jwt != null) {
          localStorage.setItem('auth-token', jwt);
          let GETjwt = localStorage.getItem('auth-token');
          console.log(GETjwt);

          //set user home location - not exists, possibly do at registration and check if same at login

          this.router.navigate(['/about']);
        }

//         console.log(value);
//         let userdata = {
//           'id': value.id,
//           'username': value.username,
//           'role': value.role
//         }
//         //correctly printing id
//         console.log(userdata.id);
//         //local storage is limited to handle only string key/value pairs.
//         //requires using JSON.stringify (to set object in localStorage) and JSON.parse  (to get object from localStorage)
//         //localStorage provides four methods to interact with stored data
//         //setItem, getItem, removeItem and clear.. localStorage.clear() removes all keys
//         localStorage.setItem('storedUsername', userdata.username);
//         localStorage.setItem('storedRole', userdata.role);
//         let username = localStorage.getItem('storedUsername');
//         let role = localStorage.getItem('storedRole');
//         //correctly prints username
//         console.log(username);
//         console.log(role);
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });

  }

}
