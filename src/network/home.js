import {request} from "./request";

export function GetHomeBanner(){
   return  request({
        url:'/banner/list',

    })
}


export function GetSortTitles(shopId=0){
    return  request({
        url:'/cms/category/list',
        params:{
            shopId

        }
    })
}

export function GetarticleList(categoryId,pageSize=8){
    return  request({
        url:'/cms/news/list',
        params:{
            categoryId,
            pageSize,
        }
    })
}



export function GetarticleContent(id){
    return  request({
        url:'/cms/news/detail/v2',
        params:{
            id,

        }
    })
}


