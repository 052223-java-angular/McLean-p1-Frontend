import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from 'src/app/dtmodels/register-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  submitForm(): void {
    if(this.registerForm.invalid) {
      console.log('This form is invalid');
      this.registerForm.reset();
      return;
    }
    //creates payload using RegisterPayload interface in dtmodels
    const payload: RegisterPayload = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value,
    };
    //call a service to send the payload to the backend api
    //do this using ng g service

    this.authService.register(payload).subscribe({
      //successful registration callback
      next: value => {
        this.router.navigate(['/login']);
      },
      error: error => {

      }
    });
  }
}
