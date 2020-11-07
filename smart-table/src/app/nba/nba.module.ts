import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NbaRoutingModule
  ]
})
export class NbaModule { }
