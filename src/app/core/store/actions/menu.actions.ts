import { MenuListDTO } from "../../dto/menu.dto";

export enum menuActionTypes {
    LOAD = '[MENU] LOAD',
    SUCCESS = '[MENU] SUCCESS',
    FAILURE = '[MENU] FAILURE',
    SET_CURRENT_MENU = '[MENU] SET CURRENT MENU'
}

export interface MenuLoadAction {
    type: menuActionTypes.LOAD
}

export interface MenuSuccessAction {
    type: menuActionTypes.SUCCESS;
    payload: MenuListDTO[];
}

export interface MenuFailureAction {
    type: menuActionTypes.FAILURE;
    payload: string;
}

export interface SetCurrentMenuAction {
    type: menuActionTypes.SET_CURRENT_MENU;
    payload: string;
}

export type MenuActions = MenuLoadAction | MenuSuccessAction | MenuFailureAction | SetCurrentMenuAction;