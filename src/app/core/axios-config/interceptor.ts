import axios from "axios";

export const Interceptor = () => {
    axios.interceptors.request.use(
        (config) => {
            return config;
        }, (error) => {
            return error;
        });
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return error;
        }
    )
}