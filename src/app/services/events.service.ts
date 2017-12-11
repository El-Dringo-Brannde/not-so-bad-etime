import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventsService {
   dispatcher: EventEmitter<any> = new EventEmitter();
   emitters: Object = {};

   constructor() { }

   emitEvent(data: any) {
      this.dispatcher.emit(data);
   }
}
