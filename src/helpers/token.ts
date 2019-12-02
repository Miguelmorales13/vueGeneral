import {  TOKEN } from '@/plugins/configs';

//mange token
// funcion para guardar el token en storage
const setToken = (token: string) => {
    localStorage.setItem(TOKEN, token)
};
// funcion para obtener el token de el storage
const getToken = (): string|null => {
    // console.log(localStorage.getItem(tokenName),tokenName);

    return localStorage.getItem(TOKEN);
}
// funcion para eliminar el token de la sesion
const removeToken = () => {
    localStorage.removeItem(TOKEN);
}
// funcion para validar si el tken es valido o no
const isValidToken = (token: any): boolean => {
    if (token) {
        const payload = handlePayload(token);

        return payload ? true : false;
        // return payload && payload.iss === `${environment.apiUrl}/login` ? true : false;
    }
    return false;
}
// mange session
export const LoginToken = (token: any, cb: Function, cbe: Function) => {
    if (isValidToken(token)) {
        setToken(token);
        cb();
    } else {
        cbe();
    }
}
export const IsAuth = () => {
    return getToken()
}
export const Logout = () => {
    removeToken();
};
// se obtiene el usuario
export const GetSession = (prop?: string): any => {

    const payload = handlePayload(getToken());
    if (prop) {
        return payload[prop] || null
    }
    return payload;
};
//   export const hasAccess=(route:string,type:'read'|'write')=>{
//     let access=getSession('access')
//     let permission=access.find(a=>a.route==route)
//     if ((permission[type]==0)) {
//       return false
//     }
//     return true
//   }
// obtiene el token y lo valida
const handlePayload = (token: string|null) => {
    if (!token) return ''
    const payload = token.split(".")[1];
    return decode(payload);
};

// decodifica el token
const decode = (payload: string) => {
    return JSON.parse(atob(payload));
};