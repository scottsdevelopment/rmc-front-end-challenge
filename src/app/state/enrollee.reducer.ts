import { createReducer, on, Action } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import { AppState } from './app.state';
import { retrievedEnrolleeList } from './enrollee.actions';

export const initialState: AppState = {
  appLoaded: false,
  enrollees: [],
};

export const enrolleesReducer = createReducer(
  initialState,
  on(retrievedEnrolleeList, (_, { enrollees }) => {
    return {
      appLoaded: true,
      enrollees,
    };
  }),
);
