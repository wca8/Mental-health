import {request} from "./request";
import {request2} from "./request2";
import qs from 'qs'
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



export function SetComment(obj){
    return  request({
        url:'/comment/add',
        method:'post',
        // params:{
        //     ...obj
        // }
        data:qs.stringify(obj)
    })
}




export function GetComment(obj){
    return  request({
        url:'/comment/list',
        method:'post',
        params:{
            ...obj
        }
    })
}


export function GetPreNext(obj){
    return  request({
        url:'/cms/news/preNext',
        method:'GET',
        params:{
            ...obj
        }
    })
}




export function GetarticleList(categoryId,pageSize=6,page=1){
    return  request({
        url:'/cms/news/list',
        params:{
            categoryId,
            pageSize,
            page
        }
    })
}




export function postArticle(obj){
    return  request({
        url:'/cms/news/put',
        method:'post',
        params:{
            ...obj
        }
    })
}



export function GetarticleList1(id){
    return  request({
        url:'/cms/news/detail/v2',
        params:{
            id
        }
    })
}



export function GetKey(){
    return  request2({
        url:'/login/key',
        method: 'post',
        params:{
            merchantKey:'8437bd27b8ec8c381de0077fac4876e0',
            merchantNo:'2101262089656468'
        }
    })
}



export function PostArticle0(headers,obj){
    return  request2({
        headers: {
            ...headers
        },
        url:'/user/apiExtNews/save',
        method: 'post',
        data:qs.stringify(obj)
    })
}











