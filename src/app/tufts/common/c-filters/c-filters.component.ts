import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-filters',
  templateUrl: './c-filters.component.html',
  styleUrls: ['./c-filters.component.scss']
})
export class CFiltersComponent implements OnInit {
  @Input() suggestedFilters;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
