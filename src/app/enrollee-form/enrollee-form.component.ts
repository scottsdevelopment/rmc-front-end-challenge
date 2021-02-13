import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '@angular/router';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { EnrolleeApiService } from '../enrollee/enrollee-api-service.service';
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

  constructor(private readonly _enrolleeService: EnrolleeApiService) {}

  public ngOnChanges(): void {
    this.resetEnrolleeForm();
  }

  public onUpdateEnrollee(event: Event): void {
    this._enrolleeService
      .updateEnrollee(this.enrollee.id, {
        name: this.enrolleeForm.get('name')?.value,
        dateOfBirth: this.enrolleeForm.get('dateOfBirth')?.value,
        active: this.enrolleeForm.get('active')?.value,
      })
      .subscribe();
  }

  public resetEnrolleeForm(): void {
    this.enrolleeForm.setValue(this.enrollee);
  }
}
