import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {JobComponent} from './job/job.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'list', component: JobComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  { path: '**', component: DashboardComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
