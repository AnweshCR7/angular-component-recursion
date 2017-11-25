import { Component, OnInit } from '@angular/core';
import { Filemodel } from '../../models/file-model';
import { ExportDataService } from '../../services/export-data.service';
import { Downloader } from '../../util/download/downloader';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  constructor(private dataservice: ExportDataService,private senddataservice: DataService) { }

  submitted = false;
  num:boolean;
  filetypes = ['.csv'];   
  model = new Filemodel();
  downloader = new Downloader();
  onSubmit() { // Write code for form submission... the data is inside model.
    this.downloader.download({});
    return this.submitted = true;
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
    this.senddataservice.newDataSubject.subscribe(
      data => {
        if(data>0)
          this.num = true;
        else 
          this.num = false;

      console.log(this.num)}
    )
  }
}
