import * as LoggerActions from './logger.actions';
import { Action } from '@ngrx/store';
import { Logger } from './logger.model';


const initialState = {
    loggerCol : [
        new Logger ('1', 'this is lien 1'),
        new Logger ('2', 'this is lien 2'),
    ]
};
export function loggerReducer(state = initialState, action: LoggerActions.AddLogger ) {
    switch (action.type) {
        case LoggerActions.ADD_LOG:
            return {
                ...state, loggerCol: [...state.loggerCol, action.payload]
            };
        default:
            return state;

    }

}
