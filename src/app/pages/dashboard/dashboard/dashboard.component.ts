import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample4
} from "../../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data: any;
  public datasets: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() { }

  ngOnInit() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];

    // var chartOrders = <HTMLCanvasElement> document.getElementById("chart-bars");

    parseOptions(Chart, chartOptions());

    // var ordersChart = new Chart(chartOrders, {
    //   type: "bar",
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });

    var chartSales = <HTMLCanvasElement> document.getElementById("chart-sales-dark");

    this.salesChart = new Chart(chartSales, {
      type: "line",
      options: chartExample4.options,
      data: chartExample4.data
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
