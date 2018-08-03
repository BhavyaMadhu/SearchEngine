import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CommonService } from '../services/common.service';
import { StreamFiltersService } from '../../stream-filters/stream-filters.service';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [StreamFiltersService],
})
export class HeaderComponent implements OnInit {
  model: any;
  searching = false;
  noResults = false;
  //showNavbar: boolean = false;
  currentRoute: any;
  currentDate: any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private filterService: StreamFiltersService
  ) {}

  ngOnInit() {
    //this.currentDate = Date.now();
    this.router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        this.currentRoute = event.url;
        //this.showNavbar = event.url.indexOf('tufts') !== -1 ? true : false;
        this.commonService.showNav.emit(
          event.url.indexOf('tufts') !== -1 ? true : false
        );
      }
    });
  }
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  onSelect(value) {
    console.log('selected value:');
    console.log(value);
    this.filterService.addPrimary({
      id: value.item.id,
      name: value.item.display_name,
      filterType: value.item.entity_type,
    });

    this.router.navigate(['/tufts/summary']);
  }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
    this.model = {};
  }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(
        value =>
          value.length < 3
            ? (this.searching = this.noResults = false)
            : (this.searching = true)
      )
      .switchMap(
        term =>
          term.length < 3
            ? []
            : this.commonService
                .getSearchResults(term)
                .do(data => {
                  if (data.length > 0) {
                    this.noResults = false;
                  } else {
                    this.noResults = true;
                  }
                })
                .catch(() => {
                  return Observable.of([]);
                })
      )
      .do(() => (this.searching = false))
      .merge(this.hideSearchingWhenUnsubscribed);

  formatter = (x: { display_name: string }) => x.display_name;
}
