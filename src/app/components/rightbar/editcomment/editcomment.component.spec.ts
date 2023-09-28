import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommentComponent } from './editcomment.component';

describe('EditcommentComponent', () => {
  let component: EditcommentComponent;
  let fixture: ComponentFixture<EditcommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcommentComponent]
    });
    fixture = TestBed.createComponent(EditcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
