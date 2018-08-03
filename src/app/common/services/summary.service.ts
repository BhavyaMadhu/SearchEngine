import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { 
  Http,
  Headers,
  Response,
  RequestOptionsArgs,
  RequestOptions,  } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';  
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {
 urlSummary : string = 'assets/data/mock/mock.json';

  constructor(private http:Http) { }


  getSummary()  {
    console.log(this.urlSummary);
    return this.http.get(this.urlSummary)
          .map(res => res.json())

        //  .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  getProduct(id: number) {
    return this.getSummary()
        .map((products) =>{ products.find(p => p.productId === id);
      console.log('product :'+products)});
}

  private handleError(err: HttpErrorResponse) {
  
    let errorMessage = '';
    if (err.error instanceof Error) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}
}
