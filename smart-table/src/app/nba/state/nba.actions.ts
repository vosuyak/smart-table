import { createAction, props } from '@ngrx/store';
import { IPlayer } from './../models/player';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const addPlayer = createAction('[Counter Component] Add');

export const loadPlayers = createAction(
    '[Nba Component] Load All Players'
);

export const createPlayer = createAction(
    '[Create Players] Create Player',
    props<{player:IPlayer}>()
); 

export const setFavPlayer = createAction(
    '[Player Card Component] Add Fav Player',
    props<{player:IPlayer}>()
);   

export const loadPlayersSuccess = createAction(
    '[Players API] Load All Players Success',
    props<{players:IPlayer[]}>()
);    

export const loadPlayersFailure = createAction(
    '[Nba Component] Load All Players Fail ',
    props<{error:string}>()
);  