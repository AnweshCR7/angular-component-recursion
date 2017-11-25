import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  dbObjects = [
    {'key':"1", 'value':"Db One" },
    {'key':"2", 'value':"Db Two"},
    {'key':"3", 'value':"Db Three"},
    {'key':"3", 'value':"Db Four"}
    
  ];


    get_data() {
      return this.dbObjects;
    }
}
