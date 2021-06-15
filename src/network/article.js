import {request} from "./request";

export function Getlike(obj){
    return  request({
        url:'/cms/news/useful/logs',
        method:'post',
        params:{
            ...obj
        }
    })
}


export function Setlike(obj){
    return  request({
        url:'/cms/news/useful',
        method:'post',
        params:{
            ...obj
        }
    })
}


export function SetFav(obj){
    return  request({
        url:'/cms/news/fav/add',
        method:'post',
        params:{
            ...obj
        }
    })
}


export function GetFav(obj){
    return  request({
        url:'/cms/news/fav/list',
        method:'post',
        params:{
            ...obj
        }
    })
}



export function SetRemoveFav(obj){
    return  request({
        url:'/cms/news/fav/delete',
        method:'post',
        params:{
            ...obj
        }
    })
}





