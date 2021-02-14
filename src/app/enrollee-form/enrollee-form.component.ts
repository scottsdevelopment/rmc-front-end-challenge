import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { empty } from 'rxjs';
import { EnrolleeApiService } from '../enrollee/enrollee-api-service.service';
import { EnrolleeActions } from '../state/enrollee.actions';
const emptyEnrollee = {
  id: '',
  name: '',
  dateOfBirth: '',
  active: false,
};
@Component({
  selector: 'app-enrollee-form',
  templateUrl: './enrollee-form.component.html',
  styleUrls: ['./enrollee-form.component.scss'],
})
export class EnrolleeFormComponent implements OnChanges {
  @Input() public enrollee: IdentifiedEnrollee = emptyEnrollee;

  public enrolleeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private readonly _store: Store) {}

  public ngOnChanges(): void {
    this.resetEnrolleeForm();
  }

  public onUpdateEnrollee(event: Event): void {
    /* this._enrolleeService
      .updateEnrollee(this.enrollee.id, {
        name: this.enrolleeForm.get('name')?.value,
        dateOfBirth: this.enrolleeForm.get('dateOfBirth')?.value,
        active: this.enrolleeForm.get('active')?.value,
      })
      .subscribe(); */
    const enrollee = {
      id: this.enrollee.id,
      name: this.enrolleeForm.get('name')?.value,
      dateOfBirth: this.enrolleeForm.get('dateOfBirth')?.value,
      active: this.enrolleeForm.get('active')?.value,
    };
    this._store.dispatch({ type: EnrolleeActions.UpdateEnrollee, enrollee });
  }

  public resetEnrolleeForm(): void {
    const newValues = {
      ...emptyEnrollee,
      ...this.enrollee,
    };
    if (newValues.dateOfBirth !== '') {
      try {
        newValues.dateOfBirth = formatDate(
          newValues.dateOfBirth,
          'yyyy-MM-dd',
          'en-US',
        );
      } catch (error) {
        newValues.dateOfBirth = '';
      }
    }
    this.enrolleeForm.setValue(newValues);
  }
}
