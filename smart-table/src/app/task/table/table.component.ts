import { Component, OnInit } from '@angular/core';
import { Shared } from '../../shared/shared';
// Input
const ELEMENT_DATA: any[] = [
  {inputs:true, outputs:false, type:"array of objects", name:"metaData", definition:"pass metadata for the tables header",time:"30 min",status:"done"},
  {inputs:true, outputs:false, type:"array of objects", name:"data", definition:"pass data for the tables datasource",time:"30 min",status:"done"},
  {inputs:true, outputs:false, type:"boolean", name:"filterDropdown", definition:"filter drop down list appears, and moves selected row on top",time:"1 30min",status:"done"},
  {inputs:true, outputs:false, type:"boolean", name:"pagination", definition:"include pagination on footer of table",time:"15 min",status:"done"},
  {inputs:true, outputs:false, type:"boolean", name:"columnResize", definition:"allow columns in table to be adjusted manually",time:"20 min",status:"done"}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends Shared  implements OnInit {
  testData = this.tableData(ELEMENT_DATA);
  columns: any[] = [
    {key:'inputs'}, 
    {key:'output'}, 
    {key:'type'}, 
    {key:'name'}, 
    {key:'definition'}, 
    {key:'time'}, 
    {key:'status'}
  ];

  constructor() {
    super()
  }
  ngOnInit(): void {
  }

}
