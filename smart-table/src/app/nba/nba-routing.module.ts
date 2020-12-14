import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { NbaComponent } from './nba.component';
import { FavoritePlayersComponent } from './favorite-players/favorite-players.component';
import { CreatePlayerComponent } from './create-player/create-player.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'league',
    pathMatch: 'full'
  },
  {
    path: 'league',
    component: NbaComponent,
    children: [
      {
        path: '',
        redirectTo: 'players',
        pathMatch: 'full'
      },
      {
        path:'athletes',
        component:PlayersComponent
      },
      {
        path:'add-player',
        component:CreatePlayerComponent
      },
      {
        path:'teams',
        component:TeamsComponent
      },
      {
        path:'favorite-player',
        component:FavoritePlayersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbaRoutingModule { }
