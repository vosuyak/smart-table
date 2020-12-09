import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Shared } from '../../shared/shared';
import { NbaService } from '../nba.service';
import { IPlayer } from '../models/player';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { ITeam } from '../models/team';

@Component({
  selector: 'nba-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent extends Shared implements OnInit, AfterViewInit, OnDestroy {
  sub: Subscription;
  players$:Observable<IPlayer[]>;
  playersTeam:ITeam;
  testData:any = [];
  columns: any[] = [
    {key:'id'}, 
    {key:'first_name'}, 
    {key:'height_feet'}, 
    {key:'height_inches'},
    {key:'last_name'}, 
    {key:'position'}
  ];

  constructor(private service:NbaService, private ref: ChangeDetectorRef) {
    super()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getPlayers();
  }

  ngOnDestroy(): void {
  }

  // api call, stores response into variable
  getPlayers = () => {
    this.players$ = this.service.get(`/api/v1/players`).pipe(
      map( i => i.data)
    )
  }

  getTeam = (value) => {
    this.playersTeam = value;
  }
}
