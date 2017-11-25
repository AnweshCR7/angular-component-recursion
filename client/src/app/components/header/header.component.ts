import { Component } from '@angular/core';
import { FamilyService } from '../../services/family.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [FamilyService]
})

export class HeaderComponent implements OnInit {
  title = "Content Generation Utility";
  data: any = {};

  constructor(private familyService: FamilyService) { 
    this.familyService = familyService;
    this.data = {};
  }

  ngOnInit() {
    this.data = this.familyService.getFamilies();
    // console.log(this.data);
  }

}