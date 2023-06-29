import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavedDateComponent } from './view-saved-date.component';

describe('ViewSavedDateComponent', () => {
  let component: ViewSavedDateComponent;
  let fixture: ComponentFixture<ViewSavedDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSavedDateComponent]
    });
    fixture = TestBed.createComponent(ViewSavedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
