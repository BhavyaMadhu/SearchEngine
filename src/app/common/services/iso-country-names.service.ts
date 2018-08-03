import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {StreamFiltersService} from '../../stream-filters/stream-filters.service';

@Injectable()
export class IsoCountryNamesService implements OnInit {

    private readonly countryNames = 'assets/data/iso_country_names.json';
    mappings: Array<any>;
    private loaded = false;
    error: any;
    constructor(private http: HttpClient, private filterService: StreamFiltersService) { }

    ngOnInit() {
      this.getMappings().subscribe(
          value => { this.mappings = value; console.log('got mappings'); console.log(this.mappings); }
      );
    }

    getMappings(): Observable<Array<any>> {
        return this.http.get<any>(this.countryNames).map((names) => names.data)
            .publishReplay(1)
            .refCount();
    }

    public getName(isoCode: string){
        return this.getMappings().map((mappings) => {
            for (let i of mappings) {
                if (i.a3_iso === isoCode) {
                    return i.name;
                }
            }
            throw new Error('ISO Code not found.');
        });
    }

    public addCountryFilter(isoCode: string) {
        this.getName(isoCode).subscribe(
            val => {
                this.filterService.addFilter({
                    id: 'a3_iso_' + isoCode,
                    name: val,
                    filterType: 'country'
                });
            }
        );
    }

    public getRegion(isoCode: string){
        for (let i of this.mappings) {
            if (i.a3_iso === isoCode) {
                return i.reg;
            }
        }
        throw new Error('ISO Code not found.');
    }
}
