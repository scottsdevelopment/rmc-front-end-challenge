import { createAction, props } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';

export enum EnrolleeActions {
  RequestEnrolleesList = '[Enrollee API] Request Enrollees List',
  RetrievedEnrolleeList = '[Enrollee API] Retrieved Enrollee List',
}

export const addEnrollee = createAction(
  '[Enrollee List] Add Enrollee',
  props<{ enrolleeId: string }>(),
);

export const removeEnrollee = createAction(
  '[Enrollee List] Remove Enrollee',
  props<{ enrolleeId: string }>(),
);

export const requestEnrolleeList = createAction(
  EnrolleeActions.RequestEnrolleesList,
);

export const retrievedEnrolleeList = createAction(
  EnrolleeActions.RetrievedEnrolleeList,
  props<{ enrollees: IdentifiedEnrollee[] }>(),
);
