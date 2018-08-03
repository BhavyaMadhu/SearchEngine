import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-news',
  templateUrl: './c-news.component.html',
  styleUrls: ['./c-news.component.scss']
})
export class CNewsComponent implements OnInit {
  @Input() newsList;
  @Input() newsWithGraph;
  @Input() newsCount;
  @Input() doughnutChartType;
  @Input() doughnutChartLabels;
  @Input() doughnutChartData;
  @Input() doughnutChartOptions;
  @Input() doughnutChartColors;
  @Input() doughnutChartLegend;
  constructor() { }

  ngOnInit() {
  }

}
