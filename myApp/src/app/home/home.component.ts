import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { RentTicket } from '../model/renteTicke';
import ArrayStore from "devextreme/data/array_store";
import {
  BrowserModule, DomSanitizer, SafeHtml,
} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridComponent,
  DxNumberBoxComponent,

} from 'devextreme-angular';

import 'devextreme/data/odata/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true,

})
export class HomeComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  @ViewChild(DxNumberBoxComponent, { static: false }) numberBox!: DxNumberBoxComponent;

  columns: any;

  dataSource: any;

  isReady!: boolean;
  
  data!:RentTicket[];

  taskSubject!: string;

  taskDetailsHtml!: SafeHtml;

  taskStatus!: string;

  taskProgress!: string;

  focusedRowKey = 1;

  autoNavigateToFocusedRow = true;

  constructor(private sanitizer: DomSanitizer, private loginService: LoginService) {
    // this.dataSource = loginService.getTicket();
    this.data = loginService.getTicket();
   
    
}
}