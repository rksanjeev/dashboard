import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from "../chart-data.service";

@Component({
  selector: 'app-browser-widget',
  templateUrl: './supplementary3.component.html',
  styleUrls: ['./supplementary3.component.css']
})
export class Supplementary3Component implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  constructor(private dataService:ChartDataService) { }

  ngOnInit(): void {
    this.chartOptions=this.dataService.getBrowserData();
  }

}
