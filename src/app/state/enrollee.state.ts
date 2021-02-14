import { IdentifiedEnrollee } from 'backend/enrollees';

export const emptyEnrollee = {
  id: '',
  name: '',
  dateOfBirth: '',
  active: false,
};

export interface EnrolleeState {
  enrollees: Array<IdentifiedEnrollee>;
  enrolleeSelected: IdentifiedEnrollee;
}
