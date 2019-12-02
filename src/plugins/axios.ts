import axios, { AxiosRequestConfig, AxiosResponse,AxiosError } from "axios";
import { URL_SERVER, TOKEN } from './configs';
import { MsgError } from './toastr';
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
    (error:AxiosError) => {
        if (error && error.response&& error.response.data) {
            MsgError(error.response.data.message)
            return  Promise.reject(error.response.data)
        } else {
            MsgError("Problemas en el servidor")
            return  Promise.reject(error)
        }
    }
)