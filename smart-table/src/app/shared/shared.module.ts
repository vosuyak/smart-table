import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UcTableComponent } from './uc-table/uc-table.component';
import { MaterialModule } from '../core/material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [UcTableComponent],
  exports:[UcTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    Ng2SearchPipeModule
  ]
})
export class SharedModule { }
