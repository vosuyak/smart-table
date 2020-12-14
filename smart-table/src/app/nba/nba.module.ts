import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { TeamsComponent } from './teams/teams.component'; 
import { SharedModule } from '../shared/shared.module';
import { NbaService } from './nba.service';
import { PlayersComponent } from './players/players.component';
import { FavoritePlayersComponent } from './favorite-players/favorite-players.component';
import { MaterialModule } from '../core/material/material.module';
import { PlayerCardComponent } from './player-card/player-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { playerReducer } from './counter.reducer';
import { NbaEffects } from './counter.effects';


@NgModule({
  declarations: [TeamsComponent, PlayersComponent, FavoritePlayersComponent, PlayerCardComponent],
  exports:[FavoritePlayersComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    NbaRoutingModule,
    // -------------- STORE & EFFECTS --------------
    StoreModule.forFeature('players', playerReducer),
    EffectsModule.forFeature([NbaEffects]),
  ],
  providers:[NbaService]
})
export class NbaModule { }
