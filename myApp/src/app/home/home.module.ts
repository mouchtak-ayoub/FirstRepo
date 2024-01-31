import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  DxDataGridModule, DxNumberBoxModule,DxCheckBoxModule,DxButtonModule 
} from 'devextreme-angular';




@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxButtonModule 

    
  ],
  bootstrap: [HomeComponent],
})
export class HomeModule { }
