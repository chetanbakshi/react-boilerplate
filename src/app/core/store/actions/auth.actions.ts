import { LoginFormDTO } from "../../dto/login-form.dto";
import { UserInfoDTO } from "../../dto/user-info.dto";

export enum authActionTypes {
    RESET = '[AUTH] RESET',
    LOGIN = '[AUTH] LOGIN',
    LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
    LOGIN_FAILURE = '[AUTH] LOGIN_FAILURE',
    LOGOUT = '[AUTH] LOGOUT',
}

export interface AuthResetAction {
    type: authActionTypes.RESET;   
}

export interface AuthLoginAction {
    type: authActionTypes.LOGIN;
    payload: LoginFormDTO;
}

export interface AuthLoginSuccessAction {
    type: authActionTypes.LOGIN_SUCCESS;
    payload: UserInfoDTO;
}

export interface AuthLoginFailureAction {
    type: authActionTypes.LOGIN_FAILURE;
    payload: string;
}

export interface AuthLogoutAction {
    type: authActionTypes.LOGOUT;
}

export type AuthActions = AuthResetAction | AuthLoginAction | AuthLoginSuccessAction | AuthLoginFailureAction | AuthLogoutAction;