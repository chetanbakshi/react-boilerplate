import { Dispatch } from "redux";
import { AuthActions, authActionTypes } from '../actions'
import axios, { AxiosResponse } from "axios";
import { UserInfoDTO } from "../../dto/user-info.dto";
import { LoginFormDTO } from "../../dto/login-form.dto";
import { ApiPathConst } from "../../constant/api-path.const";

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
            const response: AxiosResponse = await axios.get(ApiPathConst.USER_INFO);
            const data: UserInfoDTO = response.data.filter((user: UserInfoDTO) => email === user.email && password === user.password)[0] as UserInfoDTO
            setTimeout(() => {
                if (!(data)) {
                    dispatch({
                        type: authActionTypes.LOGIN_FAILURE,
                        payload: "Invalid email or password"
                    });
                    return;
                }
                delete data.password;
                dispatch({
                    type: authActionTypes.LOGIN_SUCCESS,
                    payload: data
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