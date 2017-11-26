import { Injectable } from '@angular/core';

@Injectable()
export class DropDownService {

  constructor() { }

  items = ['sample_1','sample_2','sample_3'];

  fetch_data() {
    return this.items;
  }
}
