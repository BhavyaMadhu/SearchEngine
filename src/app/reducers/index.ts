import { ActionReducerMap } from '@ngrx/store';
import { streamFilterReducer } from '../stream-filters/stream-filters.reducer';

export const reducers: ActionReducerMap<any> = {
    streamFilters: streamFilterReducer
};
