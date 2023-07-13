import request from '@/utils/request'


export const getselectData = (params, url) =>{
    return request({
        url,
        method:'get',
        params
    })
}