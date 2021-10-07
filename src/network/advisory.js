import {request} from "./request";

export function GetTitles(shopId=30535){
    return  request({
        url:'/shop/goods/category/all',
        params:{
            shopId
        }
    })
}



export function GetTeacherList(categoryId,pageSize=6,page=1){
    return  request({
        url:'/shop/goods/list/v2',
        method:'post',
        params:{
            categoryId,
            pageSize,
            page,
        }
    })
}


export function GetTeacherDetail(id){
    return  request({
        url:'/shop/goods/detail',
        method:'GET',
        params:{
           id
        }
    })
}


export function  GetPurchaseService(obj){
    return request({
        url:'/order/create',
        method:'post',
        params:{
            ...obj
        }
    })
}

