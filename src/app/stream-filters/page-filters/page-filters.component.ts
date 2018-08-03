import {Component, Input, OnInit} from '@angular/core';
import {StreamFiltersService} from '../stream-filters.service';

@Component({
  selector: 'app-page-filters',
  templateUrl: './page-filters.component.html',
  styleUrls: ['./page-filters.component.scss'],
    providers: [ StreamFiltersService]
})

export class PageFiltersComponent implements OnInit {
  @Input() tabName;
  filters: any;
  constructor(private streamFiltersService: StreamFiltersService) {
  }

  ngOnInit() {
    this.filters = this.streamFiltersService.getFilters();
  }

  removeFilter(id: string) {
    this.streamFiltersService.deleteFilter(id);
  }
}
