import {Component, OnInit, Input} from '@angular/core';
import {CommonService} from '../../../common/services/common.service';

@Component({
    selector: 'app-summary-topics',
    templateUrl: './summary-topics.component.html',
    styleUrls: ['./summary-topics.component.scss']
})
export class SummaryTopicsComponent implements OnInit {
    @Input() topicEntity;
    @Input() summaryData;
    public topicsList: any;
    public coursesList: any;
    public researchList: any;
    public facultyList: any;
    public newsList: any;
    public eventsList: any;
    public doughnutChartLabels: any[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: any[] = [350, 450, 100];
    public doughnutChartType: any = 'doughnut';
    public doughnutChartColors = [];
    public doughnutChartLegend = false;
    public doughnutChartOptions = {};
    public summaryTopics = [{name: 'global warming'}, {name: 'agriculture and food supply '},
        {name: 'global warming'}, {name: 'greenhouse'}, {name: 'greenhouse'}, {name: 'greenhouse'},
        {name: 'pollution'}, {name: 'pollution'}, {name: 'pollution'}];
    public summaryFilters = [{name: 'Michael Levin'}, {name: 'Michael Levin'}, {name: 'Michael Levin'},
        {name: 'Michael Levin'}, {name: 'Michael Levin'}, {name: 'Michael Levin'}, {name: 'Michael Levin'},
        {name: 'Michael Levin'}];
    public worldMapNames = [{name: 'Iran'}, {name: 'India'}, {name: 'Saudi Arabia'}, {name: 'China'},
        {name: 'Turkish Republic of Northern Cyprus'}, {name: 'Cameroon'}, {name: 'Pakistan'}, {name: 'Uganda'}];
    public lineChartLabels: Array<any> = ['2008', '2009', '2010', '2011', '2012', '2013', '2014'];
    public lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    ];
    public pLineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];
    public lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false
                    }
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
            fill: false
        }
    ];
    public pLineChartColors: Array<any> = [
        { // grey
            borderColor: 'rgba(0,0,255,0.3)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: false
        },
        { // dark grey
            borderColor: 'rgba(0,255,0,0.3)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            fill: false
        },
        { // grey
            borderColor: 'rgba(255,0,255,0.3)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: false
        }
    ];
    public lineChartLegend: boolean = false;
    public lineChartType: string = 'line';
    public barChartData: any[] = [];
    public barChartLabels: string[] = [];
    public barDataList: any[] = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = false;
    public barChartColors = [
        {
            backgroundColor: []
        }
    ];
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

    constructor(private commonSerevice: CommonService) {
    }

    ngOnInit() {
        this.topicsList = this.summaryTopics;
        this.coursesList = this.summaryData[1].response.docs;
        this.researchList = this.summaryData[2].response.docs;
        this.facultyList = this.summaryData[3].response.docs;
        this.newsList = this.summaryData[4].response.docs;
        this.eventsList = this.summaryData[5].response.docs;
        this.commonSerevice.getBarResults().subscribe((data) => {
            this.barChartLabels = data.barChartLabels;
            this.barChartData = data.barChartData;
            this.getRandomColor();
        });

        console.log('summary topics component init');
        console.log(this.summaryData);
    }

    private getRandomColor() {
        for (var j = 0; j < this.barChartLabels.length; j++) {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#'
            for (var i = 0; i < 6; i++) {
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
