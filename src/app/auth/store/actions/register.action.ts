import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerActionFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

export const registerActionSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);
