import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { loadPlayers, loadPlayersSuccess, loadPlayersFailure } from './counter.actions';
import { NbaService } from './nba.service';

@Injectable()

// -------------- EFFECTS --------------
export class NbaEffects {
    constructor(private actions$: Actions, 
        private service: NbaService) {
    }

    loadDomainsFromOrganization$ = createEffect(() => {
        console.log('effects');
        return this.actions$.pipe(
            ofType(loadPlayers),
            mergeMap(() =>
                this.service.nbaPlayers().pipe(
                    map(players =>
                        loadPlayersSuccess({ players })),
                    catchError(error =>
                        of(loadPlayersFailure({ error }))
                    )
                ))
        )
    });
}