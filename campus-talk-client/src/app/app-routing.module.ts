import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {PseudoComponent} from './pseudo/pseudo.component';

const routes: Routes = [

  { path: '', component: PseudoComponent },
  { path: 'campus-talk', component: PseudoComponent },
  { path: 'campus-talk/:macAddress', component: MainpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
