import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EnrolleeApiService } from '../enrollee/enrollee-api-service.service';
import { EnrolleeActions } from './enrollee.actions';
import { mergeMap, map, exhaustMap, tap } from 'rxjs/operators';
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
      mergeMap(() => this._enrolleeApiService.getAll()),
      map((enrollees: IdentifiedEnrollee[]) => ({
        type: EnrolleeActions.RetrievedEnrolleeList,
        enrollees,
      })),
    ),
  );

  public updateEnrolleeRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(EnrolleeActions.UpdateEnrollee),
      mergeMap((action: { enrollee: IdentifiedEnrollee }) => {
        return this._enrolleeApiService.updateEnrollee(action.enrollee.id, {
          name: action.enrollee.name,
          dateOfBirth: action.enrollee?.dateOfBirth,
          active: action.enrollee.active,
        });
      }),
      map((enrollee: IdentifiedEnrollee) => ({
        type: EnrolleeActions.UpdateEnrolleeSuccess,
        enrollee,
      })),
    ),
  );
}
