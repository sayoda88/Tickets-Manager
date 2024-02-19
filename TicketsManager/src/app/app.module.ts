import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule}from "@angular/forms" 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartApexComponent } from './Components/Chart Componenet/chart-apex/chart-apex.component';
import { CardComponent } from './Components/Card Component/card/card.component';
import { TableComponent } from './Components/Table Component/table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { QRCodeModule } from 'angularx-qrcode';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import {ToastModule} from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ChartApexComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    QRCodeModule,
    TableModule,
    InputSwitchModule,
    FileUploadModule,
    PaginatorModule,
    ToastModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
