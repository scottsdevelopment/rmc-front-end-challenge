import { createAction, props } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';

export enum EnrolleeActions {
  RequestEnrolleesList = '[Enrollee API] Request Enrollees List',
  RetrievedEnrolleeList = '[Enrollee API] Retrieved Enrollee List',
  UpdateEnrollee = '[Enrollee API] Update Enrollee',
  UpdateEnrolleeSuccess = '[Enrollee API] Update Enrollee Success',
}

export const requestEnrolleeList = createAction(
  EnrolleeActions.RequestEnrolleesList,
);

export const retrievedEnrolleeList = createAction(
  EnrolleeActions.RetrievedEnrolleeList,
  props<{ enrollees: IdentifiedEnrollee[] }>(),
);

export const updateEnrollee = createAction(
  EnrolleeActions.UpdateEnrollee,
  props<{ enrollee: IdentifiedEnrollee }>(),
);

export const updateEnrolleeSuccess = createAction(
  EnrolleeActions.UpdateEnrolleeSuccess,
  props<{ enrollee: IdentifiedEnrollee }>(),
);
