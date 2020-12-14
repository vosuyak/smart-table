import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Shared } from '../../shared/shared';
import { NbaService } from '../nba.service';
import { IPlayer } from '../models/player';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { ITeam } from '../models/team';
import { Store } from '@ngrx/store';
import { State, getPlayers } from '../counter.reducer';
import { loadPlayers } from '../counter.actions';

@Component({
  selector: 'nba-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent extends Shared implements OnInit, AfterViewInit, OnDestroy {
  sub: Subscription;
  players$:Observable<IPlayer[]>;
  playersTeam:ITeam;
  favPlayer:string = '';

  constructor(
    private service:NbaService, 
    private store:Store<State>,
    private ref: ChangeDetectorRef) {
    super()
    this.store.dispatch(loadPlayers());
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
  }

  // api call, stores response into variable
  getPlayers = () => {
    this.players$ = this.store.select(getPlayers);
  }

  getTeam = (value) => {
    this.playersTeam = value;
  }

  favoritePlayer = (value) =>{
    this.favPlayer = value;
  }
}
