import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { increment, decrement, reset, loadPlayersSuccess, loadPlayersFailure } from './counter.actions';
import { IPlayer } from './models/player';



import * as AppState from '../state/app.state'; 


// -------------- STATE --------------
export interface State extends AppState.State {
    domains:PlayerState;
}

// -------------- SELECTORS --------------
const getProjectsState = createFeatureSelector<PlayerState>('players');

export const getPlayers = createSelector(
    getProjectsState,
    state => state.players
)

// -------------- STATE --------------
export interface PlayerState {
  players:IPlayer[];
  error:string;
}
const initialState:PlayerState = {
  players: [],
  error:''
}

// -------------- REDUCERS --------------
export const playerReducer = createReducer<PlayerState>(
  initialState,
//   on(DomainComponentActions.filterDomainToFront, (state, action) : PlayerState => {
//       let players = state.players;
//       let domain = action.player;
//       let updatedPlayers = players.filter(i => i._id != action.player._id);
//       updatedPlayers.unshift(player);
//       return {
//           ...state,
//           players: updatedPlayers
//       }
//   }),
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