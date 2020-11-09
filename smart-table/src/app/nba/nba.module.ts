import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { TeamsComponent } from './teams/teams.component'; 
import { SharedModule } from '../shared/shared.module';
import { NbaService } from './nba.service';
import { PlayersComponent } from './players/players.component';
import { FavoritePlayersComponent } from './favorite-players/favorite-players.component';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [TeamsComponent, PlayersComponent, FavoritePlayersComponent],
  exports:[FavoritePlayersComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    NbaRoutingModule
  ],
  providers:[NbaService]
})
export class NbaModule { }
