import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from "../chart-data.service";

@Component({
  selector: 'app-line-widget',
  templateUrl: './supplementary2.component.html',
  styleUrls: ['./supplementary2.component.css']
})
export class Supplementary2Component implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  constructor(private dataService:ChartDataService) { }

  ngOnInit(): void {
    this.chartOptions=this.dataService.getLineChartData();
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize')),300
    });
  }

}
