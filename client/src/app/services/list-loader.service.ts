import { Injectable } from '@angular/core';

@Injectable()
export class ListLoaderService {

  constructor() { }

  //Static data being served to he list using the listloader service

  data_array1 = [{'id': 1, 'caption': 'one', isSelected:false, 'subItems':
  [{'id': 1.1, 'caption': 'child-1.1', isSelected:false, 'subItems':[{'id': 1.5, 'caption': 'child-1.2.1', isSelected:false }] }, {'id': 1.2, 'caption': 'child-1.2', isSelected:false },{'id': 1.3, 'caption': 'child-1.3', isSelected:false },{'id': 1.4, 'caption': 'child-1.4', isSelected:false }] },
  {'id': 2, 'caption': 'two', isSelected:false, 'subItems':
  [{'id': 2.1, 'caption': 'child-2.1'},{'id': 2.2, 'caption': 'child-2.2', isSelected:false }]},
  {'id': 3, 'caption': 'three', isSelected:false}];

  data_array2 = [{'id': 1, 'caption': 'ten', 'subItems':
  [{'id': 1.1, 'caption': 'child-ten' }, {'id': 1.2, 'caption': 'child-eleven' }] },
  {'id': 2, 'caption': 'twenty', 'subItems':
  [{'id': 2.1, 'caption': 'child-twenty_one'}]},
  {'id': 3, 'caption': 'thirty'}];

  data_array3= [{'id': 1, 'caption': 'ten', 'subItems':
  [{'id': 1.1, 'caption': 'child-ten' }, {'id': 1.2, 'caption': 'child-eleven' }] },
  {'id': 2, 'caption': 'twenty', 'subItems':
  [{'id': 2.1, 'caption': 'child-twenty_one'}]},
  {'id': 3, 'caption': 'thirty'}];

  getListData(selected_option) {
    switch (selected_option) {
      case 0: return this.data_array1;
      case 1: return this.data_array2;
      case 2: return this.data_array3;
    }
  }

}
