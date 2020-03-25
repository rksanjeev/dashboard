import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from "../chart-data.service";


@Component({
  selector: 'app-temperature-widget',
  templateUrl: './supplementary4.component.html',
  styleUrls: ['./supplementary4.component.css']
})
export class Supplementary4Component implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  constructor(private dataService:ChartDataService) { }

  ngOnInit(): void {
    this.chartOptions= this.dataService.getTempData();

    setTimeout(()=>{
      window.dispatchEvent(new Event('resize')),300
    });
  }

}
