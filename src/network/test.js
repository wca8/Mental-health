import {request} from "./request";

export function Getvideo(){
    return  request({
        url:'/mock/cms/videoList',
        method: 'get',

    })
}