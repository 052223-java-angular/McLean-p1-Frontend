import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationComponent } from './constellation.component';

describe('ConstellationComponent', () => {
  let component: ConstellationComponent;
  let fixture: ComponentFixture<ConstellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstellationComponent]
    });
    fixture = TestBed.createComponent(ConstellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
