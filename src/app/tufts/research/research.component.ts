import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResearchComponent implements OnInit {
  public researchList: any;
    public tabName = 'Research';
    public suggestedFilters: any;

    constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getResearch().subscribe((data) => {
      this.researchList = data[0].response.docs;
    });
    this.suggestedFilters = this.commonService.getSuggestedFilters();

  }

}
