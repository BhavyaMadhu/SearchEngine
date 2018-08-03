import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // @ViewChild("theMap") theMap: WorldMapComponent;
  public linearLimit = 3;
  public categoryList = [
    {
      name: 'Softwares',
      url: 'Software.png',
      routerLink: '/tufts/research',
    },
    { name: 'Tools', url: 'tools.jpg', routerLink: '/tufts/news' },
    { name: 'Packages', url: 'packages.jpg', routerLink: '/tufts/events' },
  ];
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      responsive: true,
      maintainAspectRatio: false,
    },
  ];
  public barChartColors = [
    {
      backgroundColor: [],
      responsive: true,
      maintainAspectRatio: false,
    },
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [];

  public linearCharts: any[] = [
    {
      lchartHeader: 'Cisco SSIQ (Tool)',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'Cisco SSIR (Package)',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'Cisco SSIT (Package)',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
    {
      lchartHeader: 'This is an Example of a very long Package name',
      lchart: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
    },
  ];

  public circleData: any[] = [{}, {}, {}, {}, {}, {}];
  private currentCountry: string;
  private lastClick: string;
  constructor(private commonSerevice: CommonService) {}

  ngOnInit() {
    this.commonSerevice.getBarResults().subscribe(data => {
      console.log(data);
      this.barChartLabels = data.barChartLabels;
      this.barChartData = data.barChartData;
      this.getRandomColor();
    });
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    for (var j = 0; j < this.barChartData[0].data.length; j++) {
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.barChartColors[0].backgroundColor.push(color);
    }
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public barChartClicked(e: any): void {
    console.log(e);
  }

  public barChartHovered(e: any): void {
    console.log(e);
  }
}
