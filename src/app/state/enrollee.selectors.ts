import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { AppState } from './app.state';
import { EnrolleeState } from './enrollee.state';

export const getEnrolleeState = createFeatureSelector<EnrolleeState>(
  'enrollees',
);

export const getAllEnrollees = createSelector(
  getEnrolleeState,
  (state: EnrolleeState) => state.enrollees,
);

export const getSelectedEnrollee = createSelector(
  getEnrolleeState,
  (state: EnrolleeState) => state.enrolleeSelected,
);
