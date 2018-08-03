import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../common/services/common.service';

@Component({
  selector: 'app-summary-dept-schools',
  templateUrl: './summary-dept-schools.component.html',
  styleUrls: ['./summary-dept-schools.component.scss'],
})
export class SummaryDeptSchoolsComponent implements OnInit {
  @Input() orgEntity;
  @Input() summaryData;
  public coursesList: any;
  public facultyList: any;
  public researchList: any;
  public newsList: any;
  public eventsList: any;
  public topicsList: any;
  public worldMapNames = [
    { name: 'Iran' },
    { name: 'India' },
    { name: 'Saudi Arabia' },
    { name: 'China' },
    { name: 'Turkish Republic of Northern Cyprus' },
    { name: 'Cameroon' },
    { name: 'Pakistan' },
    { name: 'Uganda' },
  ];
  public summaryTopics = [
    { name: 'global warming' },
    { name: 'agriculture and food supply ' },
    { name: 'global warming' },
    { name: 'greenhouse' },
    { name: 'greenhouse' },
    { name: 'greenhouse' },
    { name: 'pollution' },
    { name: 'pollution' },
    { name: 'pollution' },
  ];
  public summaryFilters = [
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
    { name: 'Michael Levin' },
  ];
  public barChartLabels: string[] = [];
  public barChartLegend: boolean = false;
  public barChartType: string = 'bar';
  public barDataList: any[] = [];
  public barChartData: any[] = [];
  public barChartColors = [
    {
      backgroundColor: [],
    },
  ];
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
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.facultyList = this.summaryData[3].response.docs;
    this.coursesList = this.summaryData[1].response.docs;
    this.researchList = this.summaryData[2].response.docs;
    this.newsList = this.summaryData[4].response.docs;
    this.eventsList = this.summaryData[5].response.docs;
    this.topicsList = this.summaryTopics;
    this.commonService.getBarResults().subscribe(data => {
      this.barChartLabels = data.barChartLabels;
      this.barChartData = data.barChartData;
      this.getRandomColor();
    });
  }

  private getRandomColor() {
    for (var j = 0; j < this.barChartLabels.length; j++) {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.barChartColors[0].backgroundColor.push(color);
      this.barDataList.push({
        color: color,
        label: this.barChartLabels[j],
      });
    }
  }
}
