
import { StorageKey } from "src/app/core/constant";
import { MenuActions as Action, menuActionTypes } from "../../actions/menu.actions";
import { MenuDTO as State } from "src/app/core/dto/menu.dto";
const ss = sessionStorage.getItem(StorageKey.NAVIGATION);

let initState = ss ? JSON.parse(ss) : [];
initState = { ...initState, menuLoadError: "" };

export const MenuReducer = (state: State = initState, action: Action) => {
    let newState: State;
    switch (action.type) {
        case menuActionTypes.SUCCESS:
            newState = { ...state, menuList: action.payload };
            break;
        case menuActionTypes.FAILURE:
            newState = { ...state, menuLoadError: action.payload };
            break;
        case menuActionTypes.SET_CURRENT_MENU:
            newState = { ...state, currentMenu: action.payload };
            break;
        default:
            newState = state;
    }
    sessionStorage.setItem(StorageKey.NAVIGATION, JSON.stringify(newState));
    return newState;
}