import {request} from "./request";

export function GetLinks(){
    return  request({
        url:'/friendly-partner/list',
    })
}