import { Component, OnInit, AfterViewInit, ViewChild, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'uc-table',
  templateUrl: './uc-table.component.html',
  styleUrls: ['./uc-table.component.scss']
})


export class UcTableComponent implements OnInit, AfterViewInit,AfterContentChecked {
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

  constructor(private ref: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.setDisplayedColumns();
    this.applySort();
    this.applyPagination();
    this.ref.markForCheck();
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked():void {
  }

  ngAfterViewInit(): void {
  }

  applyFilter = (event: Event): void => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySort = (): void => {
    this.dataSource.sort = this.sort;
  }

  toggleResizableColumn = (): void => {
    this.columnResize == true ? false : true;
  }

  applyPagination = ():void => {
    this.dataSource.paginator = this.paginator;
  }

  setDisplayedColumns = (): void => {
    this.dataSource = this.data;   
    console.log('this.dataSource: ', this.dataSource);
    this.dropDownOptions = this.data.filteredData; 
    this.metaData.forEach((column, index) => { this.displayedColumns[index] = column.key });
    this.columns = this.metaData;
  }

  drop = (event: CdkDragDrop<string[]>): void => {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

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
