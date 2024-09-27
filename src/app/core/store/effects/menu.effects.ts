import { Dispatch } from "redux";
import { MenuActions, menuActionTypes } from '../actions/menu.actions'
import axios from "axios";
import { MenuListDTO } from "../../dto/menu.dto";
import { ApiPath } from "../../constant/api-path";

export const loadMenu = () => {
    return async (dispatch: Dispatch<MenuActions>) => {
        try {
            const { data } = await axios.get(ApiPath.MENU);
            setTimeout(() => {
                dispatch({
                    type: menuActionTypes.SUCCESS,
                    payload: data as MenuListDTO[]
                });
            }, 2000)
        } catch (error: any) {
            setTimeout(() => {
                dispatch({
                    type: menuActionTypes.FAILURE,
                    payload: error.message
                });
            }, 2000);
        }
    }
}

export const setCurrentMenu = (menu: string) => {
    return (dispatch: Dispatch<MenuActions>) => {
        dispatch({
            type: menuActionTypes.SET_CURRENT_MENU,
            payload: menu
        });
    }
}