import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from '../../../shared/services/persistance.service';
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from '../actions/get-current-user.action';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserActionFailure());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) =>
            getCurrentUserActionSuccess({ currentUser })
          ),
          catchError(() => of(getCurrentUserActionFailure()))
        );
      })
    );
  });
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
