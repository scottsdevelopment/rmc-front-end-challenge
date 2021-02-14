import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { selectEnrollee } from '../state/enrollee.actions';
import { getSelectedEnrollee } from '../state/enrollee.selectors';
import { emptyEnrollee } from '../state/enrollee.state';

import { EnrolleeFormComponent } from './enrollee-form.component';

describe('EnrolleeFormComponent', () => {
  let component: EnrolleeFormComponent;
  let fixture: ComponentFixture<EnrolleeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolleeFormComponent],
      providers: [
        provideMockStore({
          initialState: {
            enrollees: { enrolleees: [], enrolleeSelected: emptyEnrollee },
          },
          selectors: [{ selector: getSelectedEnrollee, value: emptyEnrollee }],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct readonly inputs', () => {
    // Test that Id is readonly
    const idElement = fixture.debugElement.query(
      By.css('[formControlName="id"]'),
    );
    expect(idElement.attributes.readonly).toBeDefined();

    // Test that Name is not readonly
    const nameElement = fixture.debugElement.query(
      By.css('[formControlName="name"]'),
    );
    expect(nameElement.attributes.readonly).toBeUndefined();

    // Test that Date of birth is readonly
    const dateOfBirthElement = fixture.debugElement.query(
      By.css('[formControlName="dateOfBirth"]'),
    );
    expect(dateOfBirthElement.attributes.readonly).toBeDefined();

    // Test that Active is not readonly
    const activeElement = fixture.debugElement.query(
      By.css('[formControlName="active"]'),
    );
    expect(activeElement.attributes.readonly).toBeUndefined();
  });
});
