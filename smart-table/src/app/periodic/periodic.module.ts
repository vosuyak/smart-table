import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodicRoutingModule } from './periodic-routing.module';
import { PeriodicComponent } from './periodic/periodic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PeriodicComponent],
  imports: [
    CommonModule,
    SharedModule,
    PeriodicRoutingModule
  ]
})
export class PeriodicModule { }
