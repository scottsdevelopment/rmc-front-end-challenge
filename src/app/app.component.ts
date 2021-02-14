import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { Observable } from 'rxjs';
import { getAllEnrollees } from './state/enrollee.selectors';

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
  public enrollees$: Observable<IdentifiedEnrollee[]>;
  public enrolleeSelected: IdentifiedEnrollee = emptyEnrollee;
  constructor(private readonly _store: Store) {
    this.enrollees$ = this._store.pipe(select(getAllEnrollees));
  }

  public selectEnrollee(enrollee: IdentifiedEnrollee): void {
    this.enrolleeSelected = enrollee;
  }
}
