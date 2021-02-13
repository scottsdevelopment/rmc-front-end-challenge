import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EnrolleeApiService } from '../enrollee/enrollee-api-service.service';
import { EnrolleeActions } from './enrollee.actions';
import { mergeMap, map } from 'rxjs/operators';
import { IdentifiedEnrollee } from 'backend/enrollees';
@Injectable()
export class EnrolleeEffects {
  constructor(
    private _actions$: Actions,
    private _enrolleeApiService: EnrolleeApiService,
  ) {}

  public loadEnrolleesRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(EnrolleeActions.RequestEnrolleesList),
      mergeMap(() =>
        this._enrolleeApiService.getAll().pipe(
          map((enrollees: IdentifiedEnrollee[]) => ({
            type: EnrolleeActions.RetrievedEnrolleeList,
            payload: { enrollees },
          })),
        ),
      ),
    ),
  );
}
