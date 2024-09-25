import { combineReducers } from 'redux';
import { AuthReducer } from './auth';

export const reducers = combineReducers({
    auth: AuthReducer
});

