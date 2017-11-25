import { Component, Input } from '@angular/core';
import {ListDataItem} from '../../models/list-data-item';
import {EmitterService} from '../../services/EmitterService';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
  constructor(private emitterService: EmitterService) {}
  @Input('data') data: Array<Object>;
  @Input('key') key: string;
  @Input('searchText') searchText: string;
  @Input('parentid') parentid: string;
  
  onCheckboxChange(e, datum) {
    datum.isSelected = !datum.isSelected;
    this.emitterService.msg.emit('changed');
    // if (datum.isSelected === true) {
    //   console.log(++this.selectCount); } else { console.log(--this.selectCount); }
    setChildToChange(datum);
  }
}

function setChildToChange(current) {
  
  if(current.isSelected==true){
    if (current.subItems) {
      for (let c of current.subItems){
       c.isSelected = true;
       setChildToChange(c);
      }
   }
  }
  else{
    if (current.subItems) {
      for (let c of current.subItems){
       c.isSelected = false;
       setChildToChange(c);
      }
   }
  }
   
}
