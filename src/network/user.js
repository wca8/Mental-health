import {request} from "./request";
import qs from 'qs'


export function SetUserInfo(obj){
    return  request({
        url:'/user/modify',
        method: 'post',
        params:{
            ...obj
        }
        // data:qs.stringify(obj),

    })
}



export function GetUserArticle(obj){
    return  request({
        url:'/cms/news/list',
        method: 'post',
        params:{
            ...obj
        }
        // data:qs.stringify(obj),

    })
}



export function modifyPassword(obj){
    return  request({
        url:'/user/modify/password',
        method: 'post',
        params:{
            ...obj
        }
    })
}



export function ResetPwd(obj){
    return  request({
        url:'/user/email/reset-pwd',
        method: 'post',
        params:{
            ...obj
        }
    })
}



export function GetEmailCode(mail){
    return  request({
        url:'/verification/mail/get',
        method: 'get',
        params:{
            mail
        }
    })
}


export function GetTokenStatus(token){
    return  request({
        url:'/user/check-token',
        params:{
            token
        }
    })
}




export function GetUserInfo(token){
    return request({
        url:'/user/detail',
        params:{
            token
        }
    })
}










