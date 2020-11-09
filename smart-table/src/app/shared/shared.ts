import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})

export class Shared {
 tableData = (data:any):MatTableDataSource<any> => {
    let tableData = new MatTableDataSource(data);
    return tableData
 }
}
