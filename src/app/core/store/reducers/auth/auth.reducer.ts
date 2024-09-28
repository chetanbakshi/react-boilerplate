import { authInitialStateVO as initialState } from './auth-initial-state.vo';
import { AuthActions as Action, authActionTypes } from '../../actions';
import { AuthDTO as State } from 'src/app/core/dto/auth.dto';
import { StorageKeyConst } from 'src/app/core/constant';

const ss = sessionStorage.getItem(StorageKeyConst.USER_INFO);

let initState = ss ? JSON.parse(ss) : initialState;
initState = { ...initState, error: "" };

export const AuthReducer = (state: State = initState, action: Action) => {
    let newState: State;
    switch (action.type) {
        case authActionTypes.RESET:
            newState = {
                ...state,
                error: "",
            };
            break;
        case authActionTypes.LOGIN_SUCCESS:
            newState = {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload
            };
            break;
        case authActionTypes.LOGIN_FAILURE:
            newState = {
                ...state,
                error: action.payload
            };
            break;
        case authActionTypes.LOGOUT:
            newState = initialState;
            break;
        default:
            newState = state;
    }
    sessionStorage.setItem(StorageKeyConst.USER_INFO, JSON.stringify(newState));
    return newState;
}