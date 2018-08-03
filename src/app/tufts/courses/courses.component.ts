import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
    public tabName = 'Courses';
    public suggestedFilters: any;
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      responsive: true,
    maintainAspectRatio: false
    }
  ];
   public lineChartLegend = false;
  public lineChartType = 'line';
  public barDataList = [];
  public barChartColors = [
    {
      backgroundColor: [],
      responsive: true,
      maintainAspectRatio: false
    }
  ];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getBarResults().subscribe((data) => {
      this.barChartLabels = data.barChartLabels;
      this.barChartData = data.barChartData;
      this.getRandomColor();
    });
      this.suggestedFilters = this.commonService.getSuggestedFilters();

  }

  private getRandomColor() {
    for (let j = 0; j < this.barChartLabels.length; j++) {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.barChartColors[0].backgroundColor.push(color);
      this.barDataList.push({
        color: color,
        label: this.barChartLabels[j]
      });
    }
  }

}
