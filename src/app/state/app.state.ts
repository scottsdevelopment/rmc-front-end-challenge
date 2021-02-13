import { IdentifiedEnrollee } from 'backend/enrollees';

export interface AppState {
  enrollees: Array<IdentifiedEnrollee>;
  appLoaded: boolean;
}
