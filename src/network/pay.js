import {request} from "./request";

export function GetPay(obj){
    return  request({
        url:'/pay/wx/qrcode',
        method: 'post',
        params:{
            ...obj
        }
    })
}