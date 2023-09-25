import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConstellationService } from 'src/app/services/constellation-service.service';
import { ConstellationPayload } from 'src/app/dtmodels/constellation-payload';
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
  selected: string = '';
  selectedConstellation: any = null;

  constellations = [
    { id: 1, name: "Ares", imgURL: "assets/images/Aquarius.svg.png" },
    { id: 2, name: "Taurus", imgURL: "assets/images/Taurus.svg.png" },
    { id: 3, name: "Gemini", imgURL: "assets/images/Gemini.svg.png" },
    { id: 4, name: "Cancer", imgURL: "assets/images/Cancer.svg.png" },
    { id: 5, name: "Leo", imgURL: "assets/images/Leo.svg.png" },
    { id: 6, name: "Virgo", imgURL: "assets/images/Virgo.svg.png" },
    { id: 7, name: "Libra", imgURL: "assets/images/Libra.svg.png" },
    { id: 8, name: "Scorpio", imgURL: "assets/images/Scorpio.svg.png" },
    { id: 9, name: "Sagittarius", imgURL: "assets/images/Sagittarius.svg.png" },
    { id: 10, name: "Capricorn", imgURL: "assets/images/Capricornus.svg.png" },
    { id: 11, name: "Aquarius", imgURL: "assets/images/Aquarius.svg.png" },
    { id: 12, name: "Pisces", imgURL: "assets/images/Pisces.svg.png" }
  ];

  constructor(
    private fb:FormBuilder, 
    private constellationService: ConstellationService, 
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

    this.selectedConstellation = this.constellations.find(constellation => constellation.name === this.constellationForm.value.constellation);

  }

  getSelectedConstellationName(): string {
    return this.selectedConstellation ? this.selectedConstellation.name : '';
  }

}
