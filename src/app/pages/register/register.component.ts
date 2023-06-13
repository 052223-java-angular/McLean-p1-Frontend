import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from 'src/app/dtmodels/register-payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      return;
    }
    //creates payload using RegisterPayload interface in dtmodels
    const payload: RegisterPayload = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value,
    }
    //call a service to send the payload to the backend api
    //do this using ng g service
    }

}
