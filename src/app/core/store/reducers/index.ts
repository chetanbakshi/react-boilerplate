import { combineReducers } from 'redux';
import { AuthReducer } from './auth';
import { MenuReducer } from './menu';

export const reducers = combineReducers({
    auth: AuthReducer,
    menu: MenuReducer,
});

