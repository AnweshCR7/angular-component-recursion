import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  public newDataSubject = new Subject<any>();
  constructor() { }

  sendData(data){
    this.newDataSubject.next(data);
  }
}
