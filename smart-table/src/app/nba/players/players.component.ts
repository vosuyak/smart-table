import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shared } from '../../shared/shared';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent extends Shared implements OnInit, AfterViewInit, OnDestroy {
  sub: Subscription;
  testData:any;
  columns: any[] = [
    {key:'id'}, 
    {key:'first_name'}, 
    {key:'height_feet'}, 
    {key:'height_inches'},
    {key:'last_name'}, 
    {key:'position'}
  ];

  constructor(private service:NbaService) {
    super()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getPlayers();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPlayers = () => {
    this.sub = this.service.get(`/api/v1/players`).subscribe( data => {
      this.testData =  this.tableData(data.data);
    },
    e => {},
    () =>{
    })
  }
}
