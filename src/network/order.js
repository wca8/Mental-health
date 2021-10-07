import {request} from "./request";
import qs from "qs";

export function GetOrderList(token){
    return request({
        url:'/order/list',
        method:'POST',
        params:{
            token
        }
    })
}


export function GetOrderAllList(token, page,pageSize=6){
    return request({
        url:'/order/list',
        method:'POST',
        params:{
            token,
            page,
            pageSize,
        }
    })
}


export function GetOrderDetail(obj){
    return request({
        url:'/order/detail',
        method:'POST',
        params:{
           ...obj
        }
    })
}


export function SetOrderRefund(obj){
    return request({
        url:'/order/refundApply/apply',
        method:'POST',
        params:{
            ...obj
        }
    })
}


export function SetCancelRefund(obj){
    return request({
        url:'/order/refundApply/cancel',
        method:'POST',
        params:{
            ...obj
        }
    })
}



export function SetReceivingTheGoods(obj){
    return request({
        url:'/order/delivery',
        method:'POST',
        params:{
            ...obj
        }
    })
}



export function SetOrderComment(obj){
    return request({
        url:'/order/reputation',
        method:'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        data:qs.stringify( {
            ...obj
        })

    })
}






