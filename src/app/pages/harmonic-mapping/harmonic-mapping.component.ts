import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-harmonic-mapping',
  templateUrl: './harmonic-mapping.component.html',
  styleUrls: ['./harmonic-mapping.component.css']
})
export class HarmonicMappingComponent implements OnInit {

  planetSelectionOne = [
    { id: 1, name: "Mercury" },
    { id: 2, name: "Venus" },
    { id: 3, name: "Mars" },
    { id: 4, name: "Jupiter" },
    { id: 5, name: "Saturn" },
    { id: 6, name: "Uranus" },
    { id: 7, name: "Neptune" },
    { id: 8, name: "Pluto" },
  ];

  planetSelectionTwo = [
    { id: 1, name: "Mercury" },
    { id: 1, name: "Venus" },
    { id: 1, name: "Mars" },
    { id: 1, name: "Jupiter" },
    { id: 1, name: "Saturn" },
    { id: 1, name: "Uranus" },
    { id: 1, name: "Neptune" },
    { id: 1, name: "Pluto" },
  ];

  harmonicForm!: FormGroup;

  planet1!: FormControl;

  planet2!: FormControl;

  constructor(private fb:FormBuilder, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.planet1 = new FormControl(" ");
    this.planet2 = new FormControl(" ")
    this.harmonicForm = this.fb.group({
      planet1: [null, Validators.required],
      planet2: [null, Validators.required],
    });
  }

  submit() {
    if(this.harmonicForm.valid) {
      const planet1 = this.harmonicForm.get('planet1')!.value;
      const planet2 = this.harmonicForm.get('planet2')!.value;
      console.log(planet1);
      console.log(planet2);
    } else {
      console.error('invalid');
    }
  }

}
