import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { LoginRequestInterface } from '../../types/login-request.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginActionSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginActionFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
