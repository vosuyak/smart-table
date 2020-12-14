import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ITeam } from '../models/team';
import { IPlayer } from '../models/player';
import { State } from '../state/nba.reducer';
import { Store } from '@ngrx/store';
import { setFavPlayer } from '../state/nba.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayerCardComponent implements OnInit {
  @Input() id:string;
  @Input() first_name:string;
  @Input() last_name:string;
  @Input() height_feet:string;
  @Input() position:string;
  @Input() team:ITeam;
  @Input() weight_pounds:string;
  @Input() player:IPlayer;
  @Output() playerTeam = new EventEmitter<ITeam>();

  constructor(
    private store:Store<State>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // output the players team, to reflect on the parent component
  getTeam = (value:ITeam) => {
    this.playerTeam.emit(value);
  } 

  // add new favorite plater to state of platers, via the dispatch action
  setFavoritePlayer = () => {
    let player = this.player
    this.store.dispatch(setFavPlayer({player}));
    this._snackBar.open('added favorite', player.first_name, {
      duration: 2000,
    });
  }
}
