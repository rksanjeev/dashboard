import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MainChartComponent } from './widgets/charts/main-chart/main-chart.component';

import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {HighchartsChartModule} from "highcharts-angular";
import { Supplementary1Component } from './widgets/charts/supplementary1/supplementary1.component';
import { Supplementary2Component } from './widgets/charts/supplementary2/supplementary2.component';
import { Supplementary3Component } from './widgets/charts/supplementary3/supplementary3.component';
import { Supplementary4Component } from './widgets/charts/supplementary4/supplementary4.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainChartComponent,
    Supplementary1Component,
    Supplementary2Component,
    Supplementary3Component,
    Supplementary4Component,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainChartComponent,
    Supplementary1Component,
    Supplementary2Component,
    Supplementary3Component,
    Supplementary4Component,
  ],
})
export class SharedModule { }
