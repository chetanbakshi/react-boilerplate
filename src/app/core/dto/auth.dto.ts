import { AxiosError } from "axios";
import { UserInfoDTO } from "./user-info.dto";

export interface AuthDTO {
    isLoggedIn: boolean;
    error: AxiosError | string | null;
    userInfo: UserInfoDTO | null;
}