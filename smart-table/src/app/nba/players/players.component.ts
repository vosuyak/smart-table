import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Shared } from '../../shared/shared';
import { IPlayer } from '../models/player';
import { ITeam } from '../models/team';
import { Store } from '@ngrx/store';
import { State, getPlayers } from '../state/nba.reducer';

@Component({
  selector: 'nba-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent extends Shared implements OnInit {
  players$:Observable<IPlayer[]>;
  playersTeam:ITeam;

  constructor(
    private store:Store<State>) {
    super()
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  // api call, stores response into variable
  getPlayers = () => {
    this.players$ = this.store.select(getPlayers);
  }

  // collect the players team from nested component signaling an output eventemitter
  getTeam = (value) => {
    this.playersTeam = value;
  }
}
