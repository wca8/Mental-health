import {request} from "./request";
import qs from 'qs'


export function SetUserInfo(obj){
    return  request({
        url:'/user/modify',
        method: 'post',
        data:qs.stringify(obj)
    })
}