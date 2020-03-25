import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {ChartDataService} from "../chart-data.service";

@Component({
  selector: 'app-main-chart-widget',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {
  chartOptions={};
  Highcharts = Highcharts;
  constructor(private dataService:ChartDataService) { }

  ngOnInit(): void {
    this.chartOptions = this.dataService.getMainChart()

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(new Event('resize')),300
    });

  }
}
