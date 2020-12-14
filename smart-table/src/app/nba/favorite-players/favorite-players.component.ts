import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getFavPlayer } from '../state/nba.reducer';

@Component({
  selector: 'favorite-players',
  templateUrl: './favorite-players.component.html',
  styleUrls: ['./favorite-players.component.scss']
})
export class FavoritePlayersComponent implements OnInit {
  player$: Observable<any>

  constructor(
    private store:Store<State>,
  ) {
  }

  ngOnInit(): void {
    this.getPlayer();
  }

  // observable to listen to new favorite players coming in
  getPlayer = () => {
    this.player$ = this.store.select(getFavPlayer);
  }
}
