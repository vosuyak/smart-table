import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../models/team';
import { MatSort } from '@angular/material/sort';
import { CdkDropList, moveItemInArray, CdkDragStart } from '@angular/cdk/drag-drop';

// Input
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'nba-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, AfterViewInit {
  //view child
  @ViewChild(MatSort) sort: MatSort;
  columnResize:boolean = true;
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data:any;

  // table header
  // Input
  columns: any[] = [
    {key:'position'}, 
    {key:'name'}, 
    {key:'weight'}, 
    {key:'symbol'}
  ];
  displayedColumns: string[] = [];
  previousIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.applySort();
    this.setDisplayedColumns();
  }

  // TODO : add interface
  getData = ():void => {
    this.data = this.dataSource.filteredData;
  }

  applyFilter = (event: Event):void => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySort = ():void => {
    this.dataSource.sort = this.sort;
  }

  toggleResizableColumn = ():void => {
    this.columnResize == true ? false:true;
  }

  setDisplayedColumns() {
    this.columns.forEach(( column, index) => {
      console.log('column, index: ', column, index);
      // column.index = index;
      this.displayedColumns[index] = column.key;
    });
  }

  dragStarted(event: CdkDragStart, index: number ) {
    console.log(event, index);
    this.previousIndex = index;
  }
  
  dropList = (event: CdkDropList, index: number) => {
    console.log(event, index);
    if (event) {
      moveItemInArray(this.displayedColumns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }
}
