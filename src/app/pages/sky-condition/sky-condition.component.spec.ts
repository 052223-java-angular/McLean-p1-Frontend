import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyConditionComponent } from './sky-condition.component';

describe('SkyConditionComponent', () => {
  let component: SkyConditionComponent;
  let fixture: ComponentFixture<SkyConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkyConditionComponent]
    });
    fixture = TestBed.createComponent(SkyConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
