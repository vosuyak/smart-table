import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from '../models/team';
import { IPlayer } from '../models/player';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})

export class PlayerCardComponent implements OnInit {
  @Input() id:string;
  @Input() first_name:string;
  @Input() last_name:string;
  @Input() height_feet:string;
  @Input() position:string;
  @Input() team:ITeam;
  @Input() weight_pounds:string;
  @Output() playerTeam = new EventEmitter<ITeam>();
  @Output() favoritePlayer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getTeam = (value:ITeam) => {
    this.playerTeam.emit(value);
  } 

  setFavoritePlayer = () => {
    let name = `${this.first_name} ${this.last_name}`
    this.favoritePlayer.emit(name);
  }
}
