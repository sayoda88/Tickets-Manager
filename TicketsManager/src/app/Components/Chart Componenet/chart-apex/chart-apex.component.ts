import { Component, OnInit, ViewChild } from '@angular/core';
import {ApexAxisChartSeries,ApexChart, ApexXAxis, ApexTitleSubtitle,  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};
@Component({
  selector: 'app-chart-apex',
  templateUrl: './chart-apex.component.html',
  styleUrls: ['./chart-apex.component.css']
})
export class ChartApexComponent implements OnInit {

  public chartOptions: any;
  public chartSeries: any;
  generateDayWiseTimeSeries: any;
constructor(){
  this.generateDayWiseTimeSeries = function(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
}
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "South",
          data: this.generateDayWiseTimeSeries(
            new Date().getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function(chart:any, e:any) {
            console.log(new Date(e.xaxis.min));
          }
        },
        defaultLocale: 'fr',
        locales: [{
          name: 'fr',
          options: {
            months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيه', 'يوليه', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            shortMonths: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيه', 'يوليه', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            days: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
            shortDays: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
            toolbar: {
              download: 'Download SVG',
              selection: 'Selection',
              selectionZoom: 'Selection Zoom',
              zoomIn: 'Zoom In',
              zoomOut: 'Zoom Out',
              pan: 'Panning',
              reset: 'Reset Zoom',
            }
          }
        }]
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },
      stroke: {
        curve: "smooth"
      },
      colors: ["#8A74F9"],
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
      }
    };
    };
  }


// function generateDayWiseTimeSeries(baseval: any, any: any, count: any, any1: any, yrange: any, any2: any) {
//   throw new Error('Function not implemented.');
// }

