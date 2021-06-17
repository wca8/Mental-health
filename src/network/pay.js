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


export function GetPayStatus(obj){
    return  request({
        url:'/pay/query',
        method: 'GET',
        params:{
            ...obj
        }
    })
}
