import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockStreamMapService {

    private readonly url = 'assets/data/mock/country_facets.json';

    constructor(private http: HttpClient) { }

    public getCountryFacets(): Observable<Array<any>> {
        return this.http.get<any>(this.url).map((names) => names.facets.country_facet.buckets);
    }
}
