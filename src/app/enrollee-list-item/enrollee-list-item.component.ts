import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { EnrolleeActions } from '../state/enrollee.actions';
const emptyEnrollee = {
  id: '',
  name: '',
  dateOfBirth: '',
  active: false,
};
@Component({
  selector: 'app-enrollee-list-item',
  templateUrl: './enrollee-list-item.component.html',
  styleUrls: ['./enrollee-list-item.component.scss'],
})
export class EnrolleeListItemComponent implements OnInit {
  @Input() public enrollee: IdentifiedEnrollee = emptyEnrollee;
  @Output() public selectEnrolleeEvent = new EventEmitter<IdentifiedEnrollee>();
  constructor(private readonly _store: Store) {}
  public ngOnInit(): void {}

  public selectEnrollee(): void {
    this._store.dispatch({
      type: EnrolleeActions.SelectEnrollee,
      enrolleeId: this.enrollee.id,
    });
  }
}
