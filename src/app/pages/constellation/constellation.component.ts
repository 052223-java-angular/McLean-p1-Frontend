import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

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

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.constellationForm = this.fb.group({
    constellation: [null]
    });
  }

  submit() {
    console.log("Form submitted")
    console.log(this.constellationForm.value);
  }
}
