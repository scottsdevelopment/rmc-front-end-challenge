import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdentifiedEnrollee } from 'backend/enrollees';
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
  constructor() {}
  public ngOnInit(): void {}

  public selectEnrollee(): void {
    this.selectEnrolleeEvent.emit(this.enrollee);
  }
}
