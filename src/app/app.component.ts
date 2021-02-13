import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EnrolleeApiService } from './enrollee/enrollee-api-service.service';
import { AppState } from './state/app.state';
import { getAllEnrollees, selectEnrollees } from './state/enrollee.selectors';

const emptyEnrollee = {
  id: '',
  name: '',
  dateOfBirth: '',
  active: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public enrollees$: Observable<IdentifiedEnrollee[]> = new BehaviorSubject([]);
  public enrolleeSelected: IdentifiedEnrollee = emptyEnrollee;
  constructor(private readonly _store: Store) {
    // this.enrollees$ = this._store.pipe(select(getAllEnrollees);
  }

  public selectEnrollee(enrollee: IdentifiedEnrollee): void {
    this.enrolleeSelected = enrollee;
  }
}
