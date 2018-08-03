import {Injectable, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStreamFilters from './stream-filters.reducer';
import * as actions from './stream-filters.actions';
import {StreamFilter} from './stream-filters.reducer';

@Injectable()
export class StreamFiltersService {


    constructor(private store: Store<fromStreamFilters.State>) {
    }

    public addFilter(filter: StreamFilter) {
        this.store.dispatch(new actions.Add(filter));
    }

    public addPrimary(id) {
        this.store.dispatch(new actions.AddPrimary(id));
    }

    public setPrimary(id) {
        this.store.dispatch(new actions.SetPrimary(id));
    }

    public deleteFilter(id) {
        this.store.dispatch(new actions.Delete(id));
    }

    public getFilters() {
        return this.store.select(fromStreamFilters.selectAll);
    }

    public getPrimaryFilter(){
        return this.store.select(fromStreamFilters.selectPrimaryFilter);
    }
}
