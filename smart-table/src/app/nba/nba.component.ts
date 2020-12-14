import { Component, OnInit } from '@angular/core';
import { State } from './state/nba.reducer';
import { Store } from '@ngrx/store';
import { loadPlayers } from './state/nba.actions';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss']
})
export class NbaComponent implements OnInit {

  constructor(
    private store:Store<State>) {
    this.store.dispatch(loadPlayers());
  }

  ngOnInit(): void {
  }

}
