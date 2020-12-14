import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { increment, decrement, reset, loadPlayersSuccess, loadPlayersFailure, createPlayer, setFavPlayer } from './nba.actions';
import { IPlayer } from './../models/player';



import * as AppState from '../../state/app.state'; 


// -------------- STATE --------------
export interface State extends AppState.State {
    players:PlayerState;
}

// -------------- SELECTORS --------------
const getProjectsState = createFeatureSelector<PlayerState>('players');

export const getPlayers = createSelector(
    getProjectsState,
    state => state.players
)

export const getFavPlayer = createSelector(
    getProjectsState,
    state => state.favPlayer
)

// -------------- STATE --------------
export interface PlayerState {
  players:IPlayer[];
  favPlayer:IPlayer;
  error:string;
}
const initialState:PlayerState = {
  players: [],
  favPlayer: null,
  error:''
}

// -------------- REDUCERS --------------
export const playerReducer = createReducer<PlayerState>(
  initialState,
  on(createPlayer, (state, action) : PlayerState => {
      const updatedPlayers = [...state.players, action.player];
      return {
          ...state,
          players: updatedPlayers
      }
  }),
  on(setFavPlayer, (state, action) : PlayerState => {
    const player = state.players.find(i => i.id == action.player.id);
    return {
        ...state,
        favPlayer: player
    }
  }),
  on(loadPlayersSuccess, (state, action) : PlayerState => {
      return {
          ...state,
          players: action.players,
          error: ''
      }
  }),  
  on(loadPlayersFailure, (state, action) : PlayerState => {
      return {
          ...state,
          players: [],
          error: action.error
      }
  }),    
);