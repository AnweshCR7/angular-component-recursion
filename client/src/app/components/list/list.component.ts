import { Component, OnInit } from '@angular/core';
import {DropDownService} from '../../services/drop-down.service';
import {ListLoaderService} from '../../services/list-loader.service';
import {ListDataItem} from '../../models/list-data-item';
import {Observable}  from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {extend} from "jquery";
import {EmitterService} from '../../services/EmitterService';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [EmitterService]
})
export class ListComponent implements OnInit {

  
  selected;
  arr1 = [{'id': 1, 'display_val': 'child-one', 'children': null}];
  data_array = [];
  choices = [];
  selectCount = 0;
  searchText = '';
  searchControl = new FormControl();

  constructor(private dropdownservice: DropDownService, private listloaderservice: ListLoaderService, 
    private emitterService: EmitterService,public senddataService: DataService) {
    // this checks the whether the event has been activated using an event emitter and if yes, executes our required code.
    this.emitterService.msg.subscribe(
    (data: any) => {
    // Required line of code (to be executed when an event takes place in another component)
      this.selectCount = this.countSelectedItems(this.data_array);
  
    }); }
    

  onSelectChanged(id: any) {
   // console.log(this.arr1);
    this.selected = id.srcElement.selectedIndex;
    this.data_array = this.listloaderservice.getListData(this.selected);
    this.selectCount = this.countSelectedItems(this.data_array);
    
    
  }
  search(data: any) {
    console.log(data);
  }
  populate_dropdown() {
    // setTimeout(() => this.choices = this.dropdownservice.fetch_data(), 0);
    this.choices = this.dropdownservice.fetch_data();
  }
  countSelectedItems(itemsdata) {
    let count: number = 0;
    for (let i of itemsdata){
      if(i['isSelected']) {count++;}
    }
    this.senddataService.sendData(count);   
    return count;
  }

  ngOnInit() {
    // populates data array on load.
    this.data_array = this.listloaderservice.getListData(0);
    this.populate_dropdown();
    // initial selection count... maybe removed later if such a situation is unversally false
    this.selectCount = this.countSelectedItems(this.data_array);

    this.searchControl.valueChanges
      .debounceTime(300)
      .subscribe(newValue => this.searchText = newValue);

  

    $(function() {
        $('.clickable').on('click', function() {
        $('.glyphicon', this)
        .toggleClass('glyphicon-chevron-right')
        .toggleClass('glyphicon-chevron-down');
      });
    });

  }
}
