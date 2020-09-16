import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {SocketioService} from './socketio.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: SocketioService) {
    this.messages = (wsService
      .connect().forEach((response: any): any => {
        return response;
      }) as unknown as Subject<any>);
  }
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}
