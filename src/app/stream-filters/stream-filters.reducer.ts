import * as actions from './stream-filters.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {createFeatureSelector, createSelector} from '@ngrx/store';


// main filters interface


export interface StreamFilter {
    id: string;
    filterType: string;
    name: string;
}

// entity adapter

export const streamFilterAdapter = createEntityAdapter<StreamFilter>();

export interface State extends EntityState<StreamFilter> {
    // additional entity state properties
    primaryFilterId: string | null;
}


// Default data/ initial state


export const initialState: State = streamFilterAdapter.getInitialState({
    primaryFilterId: null
});

// Reducer

export function streamFilterReducer(state: State = initialState, action: actions.StreamFilterActions) {
    switch (action.type) {
        case actions.ADD:
            return streamFilterAdapter.addOne(action.streamFilter, state);

        case actions.ADD_PRIMARY:
            state.primaryFilterId = action.streamFilter.id;
            return streamFilterAdapter.addOne(action.streamFilter, state);

        case actions.UPDATE:
            return streamFilterAdapter.updateOne({id: action.id, changes: action.changes}, state);

        case actions.DELETE:
            return streamFilterAdapter.removeOne(action.id, state);

        case actions.SET_PRIMARY:
            state.primaryFilterId = action.id;
            return state;

        default:
            return state;
    }
}

export const getPrimaryFilterId = (state: State) => state.primaryFilterId;


// create default selectors

export const getStreamFilterState = createFeatureSelector<State>('streamFilters');

export const selectPrimaryFilterId = createSelector(getStreamFilterState, getPrimaryFilterId);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = streamFilterAdapter.getSelectors(getStreamFilterState);

export const selectPrimaryFilter = createSelector(
    selectEntities,
    getStreamFilterState,
    (filterEntities, filterState) => filterEntities[filterState.primaryFilterId]
);