import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ExportComponent } from './components/export/export.component';
import { GitIntegrationComponent } from './components/git-integration/git-integration.component';
import { ListComponent } from './components/list/list.component';
import {ExportDataService} from './services/export-data.service';
import {DropDownService} from './services/drop-down.service';
import {ListLoaderService} from './services/list-loader.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import {FilterPipe} from './components/filter.pipe';
import { ConfigService } from './services/config.service';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfigurationComponent,
    ExportComponent,
    GitIntegrationComponent,
    ListComponent,
    ListItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExportDataService, DropDownService, ListLoaderService,ConfigService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
