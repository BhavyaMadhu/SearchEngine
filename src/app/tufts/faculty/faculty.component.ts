import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit{
  public facultyList: any;
    public tabName = 'Faculty';
    public suggestedFilters: any;

  constructor(private commonService: CommonService){}
  ngOnInit() {
    this.commonService.getFaculties().subscribe((data) => {
      this.facultyList = data.docs;
    });
      this.suggestedFilters = this.commonService.getSuggestedFilters();

  }
}
