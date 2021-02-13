import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { AppState } from './app.state';

export const selectEnrollees = createSelector(
  (state: AppState) => state.enrollees,
  (enrollees: Array<IdentifiedEnrollee>) => enrollees,
);

export const getAllEnrollees = createFeatureSelector<AppState, string[]>(
  'enrollees',
);
