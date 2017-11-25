import { Injectable } from '@angular/core';

@Injectable()
export class ExportDataService {

  constructor() { }

  myService(name, type) {
    console.log('the file generated is: ' + name + type);
    // http rest call will be made here
  }

}
