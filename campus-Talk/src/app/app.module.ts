import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogsComponent} from './dashboard/logs/logs.component';
import {BlockSuspensionComponent} from './dashboard/block-suspension/block-suspension.component';
import {DetailsComponent} from './dashboard/details/details.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// adding material to project import files.
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule, MatOption} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {LoginComponent} from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SubDashboardComponent} from './dashboard/sub-dashboard/sub-dashboard.component';


@NgModule({
  exports: [
    MatLabel,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    LogsComponent,
    BlockSuspensionComponent,
    DetailsComponent,
    DashboardComponent,
    LoginComponent,
    SubDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
