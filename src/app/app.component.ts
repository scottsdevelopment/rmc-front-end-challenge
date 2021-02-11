import { Component } from '@angular/core';
import { IdentifiedEnrollee } from 'backend/enrollees';

import { Observable } from 'rxjs';
import { ApiService } from './enrollee/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public mappedEnrollees$: Observable<IdentifiedEnrollee[]>;
  constructor(private readonly _enrolleeApiService: ApiService) {
    this.mappedEnrollees$ = this._enrolleeApiService.getEnrollees();
  }
}
