import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../common/services/common.service';

@Component({
  selector: 'app-summary-faculty',
  templateUrl: './summary-faculty.component.html',
  styleUrls: ['./summary-faculty.component.scss'],
})
export class SummaryFacultyComponent implements OnInit {
  @Input() personEntity;
  @Input() summaryData;
  public topicsList: any;
  public coursesList: any;
  public researchList: any;
  public facultyList: any;
  public newsList: any;
  public eventsList: any;
  public summaryTopics = [
    { name: 'global warming' },
    { name: 'science society' },
    { name: 'data science' },
    { name: 'greenhouse' },
    { name: 'science education' },
    { name: 'education for peace' },
  ];
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
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    // this.topicsList = this.summaryData[0].response.docs;
    this.topicsList = this.summaryTopics;
    this.coursesList = this.summaryData[1].response.docs;
    this.researchList = this.summaryData[2].response.docs;
    this.facultyList = this.summaryData[3].response.docs;
    this.newsList = this.summaryData[4].response.docs;
    this.eventsList = this.summaryData[5].response.docs;
  }
}
