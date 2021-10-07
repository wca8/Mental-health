import {request} from "./request";


export function GetCode(mail){
    return  request({
        url:'/verification/mail/get',
        params:{
            mail
        }
    })
}

export function GetRegistered(obj){
    return  request({
        url:'/user/email/register',
        method: 'post',
        params:{
            ...obj
        }
    })
}



export function GetUsernameRegistered(obj){
    return  request({
        url:'/user/username/register',
        method: 'post',
        params:{
            ...obj
        }
    })
}


export function GetMailBoxLogin(obj){
    return  request({
        url:'/user/email/login',
        method: 'post',
        params:{
            ...obj
        }
    })
}



export function GetUserNameLogin(obj){
    return  request({
        url:'/user/username/login',
        method: 'post',
        params:{
            ...obj
        }
    })
}

export function GetUserInfo(token){
    return  request({
        url:'/user/detail',
        method: 'get',
        params:{
            token
        }
    })
}



export function SetLoginOut(token){
    return  request({
        url:'/user/loginout',
        method: 'get',
        params:{
            token
        }
    })
}


