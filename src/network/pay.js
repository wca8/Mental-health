import {request} from "./request";
import qs from "qs";

export function GetPay(obj){
    console.log(obj)
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


export function SetCreateOrder(obj){
    return  request({
        url:'/order/create',
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        data:qs.stringify( {
            ...obj
        })
    })
}






