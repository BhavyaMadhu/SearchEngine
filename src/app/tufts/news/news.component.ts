import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../common/services/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  public tabName = 'News';
    public suggestedFilters: any;

    constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.suggestedFilters = this.commonService.getSuggestedFilters();
  }

}
