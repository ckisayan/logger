import {Action} from '@ngrx/store';
import { Logger } from './logger.model';

export const ADD_LOG = 'ADD_LOG';
export const ADD_LOG_COL = 'ADD_LOG_COL';
export const UPDATE_LOG = 'UPDATE_LOG';
export const DELETE_LOG = 'DELETE_LOG';

export class AddLogger implements Action {
    readonly type = ADD_LOG;

    constructor(public payload: Logger) {}
}
export class AddLoggerCol implements Action {
    readonly type = ADD_LOG_COL;

    constructor(public payload: Logger[]) {}
}
export class UpdateLog implements Action {
    readonly type = UPDATE_LOG;

    constructor(public payload: {index: number, log: Logger}) {}
}
export class DeleteLog implements Action {
    readonly type = DELETE_LOG;

    constructor(public payload: number) {}
}
export type LoggerActions = AddLogger | AddLoggerCol | UpdateLog | DeleteLog;
