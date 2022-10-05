import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../services/feed.service';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../get-feed.action';

@Injectable()
export class GetFeedEffect {
  getFeedUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) =>
            getFeedSuccessAction({ feed })
          ),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    );
  });
  constructor(private actions$: Actions, private feedService: FeedService) {}
}
