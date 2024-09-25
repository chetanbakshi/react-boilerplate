import { Dispatch } from "redux";
import { AuthActions, authActionTypes } from '../actions'
import axios from "axios";
import { UserInfoDTO } from "../../dto/user-info.dto";
import { LoginFormDTO } from "../../dto/login-form.dto";

export const logout = () => {
    return (dispatch: Dispatch<AuthActions>) => {
        dispatch({
            type: authActionTypes.LOGOUT
        });
    }
}

export const login = (form: LoginFormDTO) => {
    const { email, password } = form;
    return async (dispatch: Dispatch<AuthActions>) => {

        try {
            dispatch({
                type: authActionTypes.RESET
            });
            const { data } = await axios.get('/assets/data/user-info.json');
            setTimeout(() => {
                if (!(email === data.email && password === data.password)) {
                    dispatch({
                        type: authActionTypes.LOGIN_FAILURE,
                        payload: "Invalid email or password"
                    });
                    return;
                }
                dispatch({
                    type: authActionTypes.LOGIN_SUCCESS,
                    payload: { ...data, password: "" } as UserInfoDTO
                });
            }, 2000)
        } catch (error: any) {
            dispatch({
                type: authActionTypes.LOGIN_FAILURE,
                payload: error.message
            });
        }
    }
}