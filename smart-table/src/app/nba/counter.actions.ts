import { createAction, props } from '@ngrx/store';
import { IPlayer } from './models/player';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const addPlayer = createAction('[Counter Component] Add');

export const loadPlayers = createAction(
    '[Players Component] Load All Players'
);

export const loadPlayersSuccess = createAction(
    '[Players API] Load All Players Success',
    props<{players:IPlayer[]}>()
);    

export const loadPlayersFailure = createAction(
    '[Players Component] Load All Players Fail ',
    props<{error:string}>()
);  