import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../common/services/common.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopicsComponent implements OnInit {
    public suggestedFilters: any;
    public tabName = 'Topics';

    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.suggestedFilters = this.commonService.getSuggestedFilters();
    }
}
