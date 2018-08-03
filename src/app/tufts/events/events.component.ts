import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../common/services/common.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
    public tabName = 'Events';
    public suggestedFilters: any;
    constructor(private commonService: CommonService){}

  ngOnInit() {
      this.suggestedFilters = this.commonService.getSuggestedFilters();
  }

}
