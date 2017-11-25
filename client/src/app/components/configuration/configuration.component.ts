import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  dbchoices = [];
  onSelectChanged(id: any) {
    console.log(this.dbchoices[id.srcElement.selectedIndex]);
  }
  populate_db() {
    this.dbchoices = this.configservice.get_data();
  }
  constructor(private configservice: ConfigService) { }

  ngOnInit() {

    this.populate_db();
    
  }

}
