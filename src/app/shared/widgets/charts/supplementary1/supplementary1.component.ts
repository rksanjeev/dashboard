import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {ChartDataService} from "../chart-data.service";

@Component({
  selector: 'app-stock-widget',
  templateUrl: './supplementary1.component.html',
  styleUrls: ['./supplementary1.component.css']
})
export class Supplementary1Component implements OnInit {
  Highstocks = Highcharts;
  chartOptions={};

  constructor(private dataService:ChartDataService) { }

  ngOnInit(): void {
    this.chartOptions= this.dataService.getStockChart()

  }

}
