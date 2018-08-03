import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../common/services/common.service';

@Component({
  selector: 'app-schools-departments',
  templateUrl: './schools-departments.component.html',
  styleUrls: ['./schools-departments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolsDepartmentsComponent implements OnInit {
  public suggestedFilters: any;
  public tabName = 'Schools & Departments';

  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.suggestedFilters = this.commonService.getSuggestedFilters();
  }

}
