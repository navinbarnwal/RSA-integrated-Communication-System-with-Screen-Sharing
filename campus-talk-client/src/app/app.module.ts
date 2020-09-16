import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import {HttpClientModule} from "@angular/common/http";
import {ChatService} from "./chat.service";
import {WebrtcService} from "./webrtc.service";
import {SocketioService} from "./socketio.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PseudoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChatService, SocketioService, WebrtcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
