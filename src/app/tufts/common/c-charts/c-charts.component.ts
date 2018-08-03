import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-charts',
  templateUrl: './c-charts.component.html',
  styleUrls: ['./c-charts.component.scss']
})
export class CChartsComponent implements OnInit {
  @Input() chartLabels;
  @Input() chartData;
  @Input() chartOptions;
  @Input() chartColors;
  @Input() chartLegend;
  @Input() chartType;
  constructor() { }

  ngOnInit() {
  }

}
