import {request} from "./request";
import {request2} from "./request2";
import qs from "qs";


export function GetTags0(){
    return  request({
        url:'/mock/ask/askList',
        method: 'get',

    })
}



export function PostAskQuestion(headers,obj){
    return  request2({
        headers: {
            ...headers
        },
        url:'/user/apiExtNews/save',
        method: 'post',
        data:qs.stringify(obj)
    })
}


