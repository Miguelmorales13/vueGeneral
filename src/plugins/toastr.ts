import toastr from "toastr";
export const MsgSuccess=(message:string,title?:string)=>{
    toastr.success(message,title?title:'Exitoso')
}
export const MsgInfo=(message:string,title?:string)=>{
    toastr.info(message,title?title:'Información')
}
export const MsgError=(message:string,title?:string)=>{
    toastr.error(message,title?title:'Error')
}
export const MsgWarning=(message:string,title?:string)=>{
    toastr.warning(message,title?title:'Cuidado')
}