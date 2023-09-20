import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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

  constellation!: FormControl;
  constellationForm!: FormGroup;
  selected: String | undefined;

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

  constructor(
    private fb:FormBuilder, 
    private constellationService: ConstellationService, 
    private authService: AuthService, 
    private router: Router, 
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.constellation = new FormControl(" ");
    this.constellationForm = this.fb.group({
      constellation: this.constellation,
    });

    this.constellationService.getConstellation().subscribe({
      next: value => {
        this.selected = value.constellation;
      },
      error: error => console.log(error)
    })
  }

  submit(): void {
    const payload: ConstellationPayload = {
      constellation: this.constellationForm.controls['constellation'].value,
    }

    //value of const isnt being stored to submit to backend
    console.log(this.constellationForm.value);

    this.constellationService.setConstellation(payload).subscribe({
      next: value => {
        this.toastr.success('Constellation set');
      },
      error: error => {
        this.toastr.error(error.error.message);
      }
    });

    this.selected = this.constellationForm.value.constellation;

  }
}
