import { createReducer, on } from '@ngrx/store';
import {
  retrievedEnrolleeList,
  selectEnrollee,
  updateEnrolleeSuccess,
} from './enrollee.actions';
import { emptyEnrollee, EnrolleeState } from './enrollee.state';

export const initialState: EnrolleeState = {
  enrollees: [],
  enrolleeSelected: emptyEnrollee,
};

export const enrolleesReducer = createReducer(
  initialState,
  on(retrievedEnrolleeList, (state, { enrollees }) => {
    return { ...state, enrollees };
  }),
  on(updateEnrolleeSuccess, (state, { enrollee }) => {
    return {
      ...state,
      enrollees: state.enrollees.map((existingEnrollee) => {
        if (existingEnrollee.id === enrollee.id) {
          return enrollee;
        } else {
          return existingEnrollee;
        }
      }),
    };
  }),
  on(selectEnrollee, (state, { enrolleeId }) => {
    return {
      ...state,
      enrolleeSelected:
        state.enrollees.find((enrollee) => enrollee.id === enrolleeId) ??
        emptyEnrollee,
    };
  }),
);
