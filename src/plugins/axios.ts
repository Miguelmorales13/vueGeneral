import axios, { AxiosRequestConfig } from "axios";
import { URL_SERVER, TOKEN } from './configs';
export const AXIOS = axios.create({
    baseURL: URL_SERVER
})
AXIOS.interceptors.request.use(
    (request) => {
        request.headers["Authorization"] = `Bearer ${localStorage.getItem(TOKEN)}`
        return  request
    })
AXIOS.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error);
            
        return null
    }
)