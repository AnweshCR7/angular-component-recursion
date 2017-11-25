import { Injectable } from '@angular/core';

@Injectable()
export class DropDownService {

  constructor() { }

  items = ['family', 'catalog', 'some real data'];

  fetch_data() {
    return this.items;
  }
}
