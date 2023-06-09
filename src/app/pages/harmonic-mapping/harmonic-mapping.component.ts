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

  apiList: any = [];

  harmonicForm!: FormGroup;

  planet1!: FormControl;

  planet2!: FormControl;

  isSubmitted: boolean = false;
  isMercurySubmitted: boolean = false;
  isVenusSubmitted: boolean = false;
  isMarsSubmitted: boolean = false;
  isJupiterSubmitted: boolean = false;
  isSaturnSubmitted: boolean = false;
  isUranusSubmitted: boolean = false;
  isNeptuneSubmitted: boolean = false;
  isPlutoSubmitted: boolean = false;

  harmonicValue: number = 0;

  constructor(private fb:FormBuilder, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.planet1 = new FormControl(" ");
    this.planet2 = new FormControl(" ")
    this.harmonicForm = this.fb.group({
      planet1: [null, Validators.required],
      planet2: [null, Validators.required],
    });
    this.apiService.getData().subscribe((data) => {
      console.log(data);
      this.apiList = data;
    });
  }

  submit() {
    if(this.harmonicForm.valid) {
      if(this.harmonicForm.get('planet1')!.value == this.harmonicForm.get('planet2')!.value) {
        return;
      }
      this.resetImages();
      this.isSubmitted = true;
      const planet1 = this.harmonicForm.get('planet1')!.value;
      const planet2 = this.harmonicForm.get('planet2')!.value;
      console.log(planet1);
      console.log(planet2);
      this.generateImage();
      this.generateHarmonic();
    } else {
      console.error('invalid');
    }
  }

  generateHarmonic() {
    let planetOne = 0;
    let planetTwo = 0;
    if(this.isMercurySubmitted && !planetOne) {
      planetOne = this.mercuryRotation;
    } else if(this.isMercurySubmitted) {
      planetTwo = this.mercuryRotation;
    }
    if(this.isVenusSubmitted && !planetOne) {
      planetOne = this.venusRotation;
    } else if(this.isVenusSubmitted) {
      planetTwo = this.venusRotation;
    }
    if(this.isMarsSubmitted && !planetOne) {
      planetOne = this.marsRotation;
    } else if(this.isVenusSubmitted) {
      planetTwo = this.marsRotation;
    }
    if(this.isJupiterSubmitted && !planetOne) {
      planetOne = this.jupiterRotation;
    } else if(this.isJupiterSubmitted) {
      planetTwo = this.jupiterRotation;
    }
    if(this.isSaturnSubmitted && !planetOne) {
      planetOne = this.saturnRotation;
    } else if(this.isSaturnSubmitted) {
      planetTwo = this.saturnRotation;
    }
    if(this.isUranusSubmitted && !planetOne) {
      planetOne = this.uranusRotation;
    } else if(this.isUranusSubmitted) {
      planetTwo = this.uranusRotation;
    }
    if(this.isNeptuneSubmitted && !planetOne) {
      planetOne = this.neptuneRotation;
    } else if(this.isNeptuneSubmitted) {
      planetTwo = this.neptuneRotation;
    }
    if(this.isPlutoSubmitted && !planetOne) {
      planetOne = this.plutoRotation;
    } else if(this.isPlutoSubmitted) {
      planetTwo = this.plutoRotation;
    }
    console.log(planetOne);
    console.log(planetTwo);
    let degreeOfSeparation = Math.abs(planetOne-planetTwo);
    console.log("degrees of separation: " + degreeOfSeparation);
    var fractionOfOne = 0;
    if(degreeOfSeparation <= 180) {
      var fractionOfOne = 360/degreeOfSeparation;
    } else if(degreeOfSeparation > 180) {
      var fractionOfOne = 360/(360-degreeOfSeparation)
    }
    console.log("fraction of one: " + fractionOfOne);
    let truncated = Math.trunc(fractionOfOne);
    console.log(truncated);
    let decimalIsolation = fractionOfOne - truncated;
    console.log(decimalIsolation)
    //calculation could use some more precision but its accurate for sure
    var multiFactor = 1;
    if(decimalIsolation > 0.2 && decimalIsolation < 0.4) {
      var multiFactor = 3;
    } else if(decimalIsolation < 0.6 && decimalIsolation > 0.4) {
      var multiFactor = 2;
    } else if(decimalIsolation < 0.8 && decimalIsolation > 0.6) {
      var multiFactor = 3;
    }
    console.log("multiplication factor: " + multiFactor);
    if(fractionOfOne > 50) {
      this.harmonicValue = 1;
    } else {
      this.harmonicValue = Math.round(fractionOfOne*multiFactor);
    }
  }

  resetImages() {
    this.isSubmitted = false;
    this.isMercurySubmitted = false;
    this.isVenusSubmitted = false;
    this.isMarsSubmitted = false;
    this.isJupiterSubmitted = false;
    this.isSaturnSubmitted = false;
    this.isUranusSubmitted = false;
    this.isNeptuneSubmitted = false;
    this.isPlutoSubmitted = false;
  }

  generateImage() {
    if(this.harmonicForm.get('planet1')!.value == "Mercury" || this.harmonicForm.get('planet2')!.value == "Mercury") {
      this.isMercurySubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Venus" || this.harmonicForm.get('planet2')!.value == "Venus") {
      this.isVenusSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Mars" || this.harmonicForm.get('planet2')!.value == "Mars") {
      this.isMarsSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Jupiter" || this.harmonicForm.get('planet2')!.value == "Jupiter") {
      this.isJupiterSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Saturn" || this.harmonicForm.get('planet2')!.value == "Saturn") {
      this.isSaturnSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Uranus" || this.harmonicForm.get('planet2')!.value == "Uranus") {
      this.isUranusSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Neptune" || this.harmonicForm.get('planet2')!.value == "Neptune") {
      this.isNeptuneSubmitted = true;
    }
    if(this.harmonicForm.get('planet1')!.value == "Pluto" || this.harmonicForm.get('planet2')!.value == "Pluto") {
      this.isPlutoSubmitted = true;
    }
  }

  get aresRotation() {
    return 0;
  }

  get taurusRotation() {
    return 30;
  }

  get geminiRotation() {
    return 60;
  }

  get cancerRotation() {
    return 90;
  }

  get leoRotation() {
    return 120;
  }

  get virgoRotation() {
    return 150;
  }

  get libraRotation() {
    return 180;
  }

  get scorpioRotation() {
    return 210;
  }

  get sagittariusRotation() {
    return 240;
  }

  get capricornRotation() {
    return 270;
  }

  get aquariusRotation() {
    return 300;
  }

  get piscesRotation() {
    return 330;
  }

  get mercuryRotation() {
    return this.apiList.response[0].ra;
  }

  get venusRotation() {
    return this.apiList.response[1].ra;
  }

  get marsRotation() {
    return this.apiList.response[2].ra;
  }

  get jupiterRotation() {
    return this.apiList.response[3].ra;
  }

  get saturnRotation() {
    return this.apiList.response[4].ra;
  }

  get uranusRotation() {
    return this.apiList.response[5].ra;
  }

  get neptuneRotation() {
    return this.apiList.response[6].ra;
  }

  get plutoRotation() {
    return this.apiList.response[7].ra;
  }

}
