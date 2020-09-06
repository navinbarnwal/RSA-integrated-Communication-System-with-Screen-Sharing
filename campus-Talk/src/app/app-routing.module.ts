import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LogsComponent} from './dashboard/logs/logs.component';
import {DetailsComponent} from './dashboard/details/details.component';
import {BlockSuspensionComponent} from './dashboard/block-suspension/block-suspension.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SubDashboardComponent} from './dashboard/sub-dashboard/sub-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [

    { path: '', redirectTo: 'sub-dashboard', pathMatch: 'full' },
    { path: 'sub-dashboard', component: SubDashboardComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'BLockSuspension', component: BlockSuspensionComponent }
  ]},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
