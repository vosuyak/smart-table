import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { TeamsComponent } from './teams/teams.component'; 
import { SharedModule } from '../shared/shared.module';
import { NbaService } from './nba.service';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [TeamsComponent, PlayersComponent],
  imports: [
    CommonModule,
    SharedModule,
    NbaRoutingModule
  ],
  providers:[NbaService]
})
export class NbaModule { }
