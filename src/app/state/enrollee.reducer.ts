// tslint:disable no-shadowed-variable

import { createReducer, on } from '@ngrx/store';
import { IdentifiedEnrollee } from 'backend/enrollees';
import {
  retrievedEnrolleeList,
  updateEnrolleeSuccess,
} from './enrollee.actions';

export const initialState: IdentifiedEnrollee[] = [];

export const enrolleesReducer = createReducer(
  initialState,
  on(retrievedEnrolleeList, (_state, { enrollees }) => {
    return enrollees;
  }),
  on(updateEnrolleeSuccess, (enrollees, { enrollee }) => {
    return enrollees.map((existingEnrollee) => {
      if (existingEnrollee.id === enrollee.id) {
        return enrollee;
      } else {
        return existingEnrollee;
      }
    });
  }),
);
