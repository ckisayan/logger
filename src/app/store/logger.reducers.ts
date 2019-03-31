import * as LoggerActionsLoc from './logger.actions';
import { Action } from '@ngrx/store';
import { Logger } from './logger.model';


const initialState = {
    loggerCol : [
        new Logger ('1', 'this is lien 1'),
        new Logger ('2', 'this is lien 2'),
    ]
};


export function loggerReducer(state = initialState, action: LoggerActionsLoc.LoggerActions ) {
    switch (action.type) {
        case LoggerActionsLoc.ADD_LOG:
            return {
                ...state, loggerCol: [...state.loggerCol, action.payload]
            };
        case LoggerActionsLoc.ADD_LOG_COL:
            return {
                ...state, loggerCol: [...state.loggerCol, ...action.payload]
            };
        case LoggerActionsLoc.UPDATE_LOG:
            const log = state.loggerCol[action.payload.index];
            const updatedLog = {
                ...log, ...action.payload.log
            };
            const logCol = [...state.loggerCol];
            logCol[action.payload.index] = updatedLog;

            return {
                ...state, loggerCol: logCol
            };
        case LoggerActionsLoc.DELETE_LOG:
            const newLogs = [...state.loggerCol];
            newLogs.splice(action.payload, 1);
            return {
                ...state, loggerCol: newLogs
            };
        default:
            return state;

    }

}
