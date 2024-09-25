import { AuthDTO } from "src/app/core/dto/auth.dto";

export const authInitialStateVO: AuthDTO = {
    isLoggedIn: false,
    error: null,
    userInfo: null
};