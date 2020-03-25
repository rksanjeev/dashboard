import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
// @ts-ignore
import * as dataJSON from '../../../../../assets/chartData/aapl-c.json';

@Component({
  selector: 'app-stock-widget',
  templateUrl: './supplementary1.component.html',
  styleUrls: ['./supplementary1.component.css']
})
export class Supplementary1Component implements OnInit {
  Highstocks = Highcharts;
  chartOptions={};
  data: any = (dataJSON as any).default;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={


      rangeSelector: {
        selected: 1
      },

      title: {
        text: 'AAPL Stock Price'
      },

      series: [{
        name: 'AAPL',
        data: this.data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };

  }

}
