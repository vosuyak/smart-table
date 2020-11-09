import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'nba',
    loadChildren: () => import('./nba/nba.module').then(m => m.NbaModule)
  },
  {
    path: 'periodic',
    loadChildren: () => import('./periodic/periodic.module').then(m => m.PeriodicModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
