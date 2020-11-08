import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Shared } from '../../shared/shared';
import { NbaService } from '../nba.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nba-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent extends Shared implements OnInit, AfterViewInit {
  testData:any;
  columns: any[] = [
    {key:'id'}, 
    {key:'abbreviation'}, 
    {key:'city'}, 
    {key:'conference'},
    {key:'division'}, 
    {key:'full_name'}, 
    {key:'name'}
  ];
  sub: Subscription;
  
  constructor(private service:NbaService) {
    super()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTeams();
  }

  ngAfterContentChecked():void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getTeams = () => {
    this.sub = this.service.get(`/api/v1/teams`).subscribe( data => {
      this.testData =  this.tableData(data.data);
    },
    e => {},
    () =>{
    })
  }
}
