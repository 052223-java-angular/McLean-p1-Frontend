import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ConstellationService } from 'src/app/services/constellation-service.service';
import { ConstellationPayload } from 'src/app/dtmodels/constellation-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

  token: any;

  constellation!: FormControl;

  constellationForm!: FormGroup;

  constellations = [
    { id: 1, name: "Ares" },
    { id: 2, name: "Taurus" },
    { id: 3, name: "Gemini" },
    { id: 4, name: "Cancer" },
    { id: 5, name: "Leo" },
    { id: 6, name: "Virgo" },
    { id: 7, name: "Libra" },
    { id: 8, name: "Scorpio" },
    { id: 9, name: "Sagittarius" },
    { id: 10, name: "Capricorn" },
    { id: 11, name: "Aquarius" },
    { id: 12, name: "Pisces" }
  ];

  constructor(private fb:FormBuilder, private constellationService: ConstellationService, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.token = sessionStorage.getItem('token');
    this.constellation = new FormControl(" ");
    this.constellationForm = this.fb.group({
      constellation: this.constellation,
    });
  }

  submit(): void {
    console.log(sessionStorage.getItem('token'));

    const payload: ConstellationPayload = {
      constellation: this.constellationForm.controls['constellation'].value,
      token: this.token
    }

    //value of const isnt being stored to submit to backend
    console.log(this.constellationForm.value);

    this.constellationService.setConstellation(payload).subscribe({
      next: value => {
        this.toastr.success('Constellation set');
        this.router.navigate(['/about']);
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });
  }
}
