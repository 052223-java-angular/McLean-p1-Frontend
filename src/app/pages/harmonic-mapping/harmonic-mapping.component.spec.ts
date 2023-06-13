import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonicMappingComponent } from './harmonic-mapping.component';

describe('HarmonicMappingComponent', () => {
  let component: HarmonicMappingComponent;
  let fixture: ComponentFixture<HarmonicMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarmonicMappingComponent]
    });
    fixture = TestBed.createComponent(HarmonicMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
