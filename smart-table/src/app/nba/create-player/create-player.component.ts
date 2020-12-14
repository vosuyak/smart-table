import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPlayer } from '../models/player';
import { createPlayer } from '../state/nba.actions';
import { State } from '../state/nba.reducer';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {
  playerForm:FormGroup;

  constructor(
    private store:Store<State>,
    private _snackBar: MatSnackBar,
    private formBuilder:FormBuilder,
  ) { 
    this.playerFormBuilder();
  }

  ngOnInit(): void {
  }

  // add new player to nba state via. dispatch 
  create() {
    let player:IPlayer = this.playerForm.value;
    player.id = 1256;
    player.team = {
      id:10,
      player_name: `${player.first_name} ${player.last_name}`,
      abbreviation:"GSW",
      city:"Golden State",
      conference:"West",
      division:"Pacific",
      full_name:"Golden State Warriors",
      name:"Warriors",
    }
    this.store.dispatch(createPlayer({player}));
    this._snackBar.open('added to roster', player.first_name, {
      duration: 2000,
    });
   }

  // build the reactive form 
  playerFormBuilder = () => {
    this.playerForm = this.formBuilder.group({
      first_name:new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      height_feet: new FormControl('', Validators.required),
      height_inches: new FormControl(''),
      position: new FormControl('', Validators.required),
    });
  }
}
