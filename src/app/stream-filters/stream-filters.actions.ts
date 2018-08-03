import {Action} from '@ngrx/store';
import {StreamFilter} from './stream-filters.reducer';


export const ADD = '[StreamFilter] Add';
export const UPDATE = '[StreamFilter] Update';
export const DELETE = '[StreamFilter] Delete';
export const SET_PRIMARY = '[StreamFilter] SetPrimary';
export const ADD_PRIMARY = '[StreamFilter] AddPrimary';


export class Add implements Action {
    readonly type = ADD;

    constructor(public streamFilter: StreamFilter) {
    }
}

export class AddPrimary implements Action {
    readonly type = ADD_PRIMARY;

    constructor(public streamFilter: StreamFilter) {
    }
}

export class Update implements Action {
    readonly type = UPDATE;

    constructor(public id: string, public changes: Partial<StreamFilter>) {
    }
}

export class Delete implements Action {
    readonly type = DELETE;

    constructor(public id: string) {
    }
}

export class SetPrimary implements Action {
    readonly type = SET_PRIMARY;

    constructor(public id: string) {
    }

}

export type StreamFilterActions
    = Add
    | Update
    | Delete
    | SetPrimary
    | AddPrimary;
