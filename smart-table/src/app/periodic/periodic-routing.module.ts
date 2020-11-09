import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicComponent } from './periodic/periodic.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'periodic',
    pathMatch: 'full'
  },
  {
    path: 'periodic',
    component: PeriodicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicRoutingModule { }
