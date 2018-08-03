import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { Subscription } from 'rxjs';
import { StreamFiltersService } from '../../stream-filters/stream-filters.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [StreamFiltersService],
})
export class SummaryComponent implements OnInit {
  public primaryEntity: any;
  public summaryData: any;
  public busy: Subscription;
  public suggestedFilters: any;
  public tabName = 'Summary';
  constructor(
    private commonService: CommonService,
    private filterService: StreamFiltersService
  ) {}
  ngOnInit() {
    this.filterService.getPrimaryFilter().subscribe(val => {
      if (val) {
        this.primaryEntity = val;
        this.loadData(val);
      }
    });
    this.suggestedFilters = this.commonService.getSuggestedFilters();
  }

  loadData(entity: any) {
    const type = entity.filterType;
    const streamId = entity.id;

    if (type === 'person' || type === 'topic' || type === 'acad_org') {
      this.busy = this.commonService
        .getSummaryFData(streamId)
        .subscribe(data => {
          // console.log(data);
          this.summaryData = data;
        });
    }
  }
}
