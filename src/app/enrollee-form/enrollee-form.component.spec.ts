import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeFormComponent } from './enrollee-form.component';

describe('EnrolleeFormComponent', () => {
  let component: EnrolleeFormComponent;
  let fixture: ComponentFixture<EnrolleeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolleeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
