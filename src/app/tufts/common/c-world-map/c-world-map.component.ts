import { Component, OnInit, Input } from '@angular/core';
import { MockStreamMapService} from '../../../common/services/mock-stream-map-service.service';
import { IsoCountryNamesService } from '../../../common/services/iso-country-names.service';
import {Observable} from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {StreamFiltersService} from '../../../stream-filters/stream-filters.service';


@Component({
  selector: 'app-c-world-map',
  templateUrl: './c-world-map.component.html',
  styleUrls: ['./c-world-map.component.scss'],
    providers: [MockStreamMapService, IsoCountryNamesService]
})
export class CWorldMapComponent implements OnInit {
  data: Array<any>;
  countryList: Array<any>;
  constructor(private facetService: MockStreamMapService, private isoService: IsoCountryNamesService,
              private filterService: StreamFiltersService) { }

  ngOnInit() {
      // subscribe to facet service
      forkJoin(this.facetService.getCountryFacets(), this.isoService.getMappings()).subscribe(
          values => {
              this.data = values[0];
              const countries = values[0].sort((a: any, b: any) => a.count > b.count ? -1 : 1).slice(0, 10);
              for (let i of countries) {
                  // TODO: flatten this nested subscription, or find a different pattern
                  i.name = this.isoService.getName(i.val).subscribe(
                    value => i.name = value
                  );
              }
              this.countryList = countries;
          }
      );


      // TODO: add values to filter service from this component. can be added from stream-map
  }

  addCountryFilter(id: string) {
      this.isoService.addCountryFilter(id);
  }

}
