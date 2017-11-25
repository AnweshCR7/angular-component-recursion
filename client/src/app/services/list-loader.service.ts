import { Injectable } from '@angular/core';

@Injectable()
export class ListLoaderService {

  constructor() { }

  data_array1 = [{'id': 1, 'caption': 'one', isSelected:false, 'subItems':
  [{'id': 1.1, 'caption': 'child-one', isSelected:false }, {'id': 1.2, 'caption': 'child-two', isSelected:false }] },
  {'id': 2, 'caption': 'two', isSelected:false, 'subItems':
  [{'id': 2.1, 'caption': 'child-two_one'}]},
  {'id': 3, 'caption': 'three', isSelected:false}];

  data_array2 = [{'id': 1, 'caption': 'ten', 'subItems':
  [{'id': 1.1, 'caption': 'child-ten' }, {'id': 1.2, 'caption': 'child-eleven' }] },
  {'id': 2, 'caption': 'twenty', 'subItems':
  [{'id': 2.1, 'caption': 'child-twenty_one'}]},
  {'id': 3, 'caption': 'thirty'}];

  data_array3= [{'id': 'MIR_ACGMINC', 'caption': 'Accumulates Capacity Incident', 'isSelected': false, 
  'subItems' : [{'id': 'fields','caption': 'fields', 'isSelected': false},
  {'id':'datasheets', 'caption':'datasheets', 'isSelected': false},
  {'id':'stateManagement','caption':'stateManagement', 'isSelected': false}, 
  {'id':'entities','caption':'entities','isSelected': false} ] },
  {'id': 'MIR_ASCRTHS', 'caption': 'Asset Criticality Analysis Has System', 'isSelected': false, 
  'subItems' : [{'id':'fields','caption':'fields','isSelected': false},
  {'id':'datasheets','caption':'datasheets','isSelected': false},
  {'id':'stateManagement','caption':'stateManagement','isSelected': false}, 
  {'id':'entities','caption':'entities','isSelected': false} ] }];

  getListData(selected_option) {
    switch (selected_option) {
      case 0: return this.data_array1;
      case 1: return this.data_array2;
      case 2: return this.data_array3;
    }
  }

}
