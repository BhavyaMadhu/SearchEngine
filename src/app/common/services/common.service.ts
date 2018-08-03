import { Injectable, Output, EventEmitter } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptionsArgs,
  RequestOptions,
} from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class CommonService {
  showNav: EventEmitter<boolean> = new EventEmitter(false);

  private readonly facultyList = 'assets/data/faculty.json';
  private readonly researchList = 'assets/data/research.json';
  private readonly searchList = 'assets/data/search.json';
  private readonly newsList = 'assets/data/news.json';
  private readonly suggestedFilters = 'assets/data/suggestedFilters.json';
  private readonly searchUrl = 'https://streams-dev.it.tufts.edu/solr7/streams/select';
  public _faculties: any;
  public _researches: any;
  // public  showNav: boolean = false;

  private readonly REQUEST_HEADERS: Headers = new Headers({
    Authorization: 'Basic ' + btoa('stream:stream_user1'),
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  private readonly REQUEST_OPTIONS: RequestOptionsArgs = new RequestOptions({
    headers: this.REQUEST_HEADERS,
  });

  constructor(private http: Http) {}

  public getSearchUrl(): string {
    return this.searchUrl;
  }

  public getFaculties(): Observable<any> {
    return this.http
      .get(`${this.facultyList}`)
      .map((resp: Response) => resp.json().response);
  }

  public getSearchResults(searchString): Observable<any> {
    return this.http
      .get(
        this.getSearchUrl() + `?fq=stream_group:entity&q=full_text:${searchString}*`,
        this.REQUEST_OPTIONS
      )
      .map(res => {
        return res.json().response.docs;
      });
  }

  public getBarResults(): Observable<any> {
    return this.http
      .get(
        this.getSearchUrl() + `?q=*&type=edismax&rows=0&json.facet=%7Bfacet_name:%7Btype:%20terms,%20field:%20department_display_ss%7D%7D`,
        this.REQUEST_OPTIONS
      )
      .map(res => {
        //return res.json().facets.facet_name;
        const items = res.json().facets.facet_name.buckets;
        let data = {
          barChartLabels: [],
          barChartData: [
            {
              data: [],
            },
          ],
        };
        items.forEach(obj => {
          data.barChartLabels.push(obj.val);
          data.barChartData[0].data.push(obj.count);
        });
        return data;
      });
  }

  public getSuggestedFilters(): Observable<any> {
    return this.http.get(this.suggestedFilters)
        .map((resp: Response) => resp.json().filters);

  }

  public getResearch(): Observable<any> {
    // return Observable.forkJoin([
    //     this.http.get(`${this.researchList}`).map((res: Response) => res.json()),
    //     this.http.get(`${this.facultyList}`).map((res: Response) => res.json())
    // ]);
    return Observable.combineLatest(
      this.http.get(`${this.researchList}`).map((res: Response) => res.json())
    );
  }

  public getSummaryFData(streamId): Observable<any> {
    return Observable.forkJoin([
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:topic&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => res.json()),
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:courses&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => {
          const data = <any[]>res.json();
          let courseData = [];
          data['response'].docs.forEach(course => {
            course.showCourseDesc = false;
          });
          return data;
        }),
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:research&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => res.json()),
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:people&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => res.json()),
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:news&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => res.json()),
      this.http
        .get(
          this.getSearchUrl() + `?q=*:*&fq=stream_group:events&stream_id:${streamId}`,
          this.REQUEST_OPTIONS
        )
        .map((res: Response) => res.json()),
    ]);
  }
}
