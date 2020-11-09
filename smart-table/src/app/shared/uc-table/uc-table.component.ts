import { Component, OnInit, AfterViewInit, ViewChild, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Shared } from '../shared';

@Component({
  selector: 'uc-table',
  templateUrl: './uc-table.component.html',
  styleUrls: ['./uc-table.component.scss']
})


export class UcTableComponent extends Shared implements OnInit, AfterViewInit,AfterContentChecked {
  // Inputs
  @Input() metaData: any;
  @Input() data: any;
  @Input() filterDropdown: boolean = false;
  @Input() pagination: boolean = false;
  @Input() columnResize: boolean = false;

  //local variables
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [];
  previousIndex: number;
  columns: any;
  dataSource: any;
  filterSearch:string = '';
  isFilter: boolean = false;
  dropDownOptions:any;

  constructor(private ref: ChangeDetectorRef) {
    super()
  }

  ngOnChanges(): void {
    this.dataSourceInit();
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked():void {
  }

  ngAfterViewInit(): void {
  }

  // default filter
  applyFilter = (event: Event): void => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // set data to columns
  dataSourceInit = () => {
    this.dataSource = this.tableData(this.data);
    this.dropDownOptions = this.data; 
    this.applySort(); 
    this.applyPagination(); 
    this.setDisplayedColumns();
  }
  
  // default sort
  applySort = (): void => {
    this.dataSource.sort = this.sort;
  }

  // default resize columns
  toggleResizableColumn = (): void => {
    this.columnResize == true ? false : true;
  }

  // default pagination
  applyPagination = ():void => {
    this.dataSource.paginator = this.paginator;
  }

  // Get data from Input
  setDisplayedColumns = (): void => {
    if (this.data != undefined){
      this.metaData.forEach((column, index) => { this.displayedColumns[index] = column.key });
      this.columns = this.metaData;
    }
  }
  
  // re-arrange columns 
  drop = (event: CdkDragDrop<string[]>): void => {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  // show dropdown
  dropdown = (event: any): void => {
    let name = event.target.value
    if (name.length >= 2) {
      this.isFilter = true;
    } else {
      this.isFilter = false;
    }
  }

  getRow = (row) => {
  }

  // smart filter, moves selected item to top
  filterItem = (array, obj:any) => {
    let index = array.indexOf(obj)
    array.unshift(obj)
    index = index + 1;
    array.splice(index, 1)
    this.dropDownOptions = array;
    this.dataSource = new MatTableDataSource(array);
    this.filterSearch = '';
    this.isFilter = false;
  }

}
