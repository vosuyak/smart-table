import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { QandaComponent } from './qanda/qanda.component';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [TableComponent, QandaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
