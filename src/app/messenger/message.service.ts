import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Message } from './message';

@Injectable()
export class MessageService {

  constructor() { }

  private messageStream: Observable<Message> = null;

  public GetMessageStream(): Observable<Message> {
    this.messageStream = Observable.of(
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    new Message('Ryan', 'hello'),
    );
    return this.messageStream;
  }
}
