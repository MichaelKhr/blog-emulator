import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserActionSuccess = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);
export const getCurrentUserActionFailure = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
