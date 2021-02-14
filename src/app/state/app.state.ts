import { IdentifiedEnrollee } from 'backend/enrollees';
import { EnrolleeState } from './enrollee.state';

export interface AppState {
  enrollees: EnrolleeState;
}
