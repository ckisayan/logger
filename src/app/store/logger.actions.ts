import {Action} from '@ngrx/store';
import { Logger } from './logger.model';

export const ADD_LOG = 'ADD_LOG';

export class AddLogger implements Action {
    readonly type = ADD_LOG;

    constructor(public payload: Logger) {}
}

export type LoggerActions = AddLogger;
