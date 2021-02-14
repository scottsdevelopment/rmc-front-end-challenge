import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { tap } from 'rxjs/operators';
import { EnrolleeActions } from '../state/enrollee.actions';
import { getSelectedEnrollee } from '../state/enrollee.selectors';
import { emptyEnrollee } from '../state/enrollee.state';

@Component({
  selector: 'app-enrollee-form',
  templateUrl: './enrollee-form.component.html',
  styleUrls: ['./enrollee-form.component.scss'],
})
export class EnrolleeFormComponent implements OnInit, OnDestroy {
  public enrollee: IdentifiedEnrollee = emptyEnrollee;

  public enrolleeForm = new FormGroup({
    id: new FormControl(emptyEnrollee.id),
    name: new FormControl(emptyEnrollee.name),
    dateOfBirth: new FormControl(emptyEnrollee.dateOfBirth),
    active: new FormControl(emptyEnrollee.active),
  });

  constructor(private readonly _store: Store) {}

  public ngOnInit(): void {
    this._store
      .select(getSelectedEnrollee)
      .pipe(
        tap((enrolleeSelected) => {
          this.enrollee = enrolleeSelected;
          this.resetEnrolleeForm();
        }),
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
