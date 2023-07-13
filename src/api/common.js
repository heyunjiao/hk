import request from "@/utils/request";

export function UploadPicture(data) {
    return request({
      url: '/System/UploadPicture',
      method: 'post',
      data
    })
  }
  export function GetRoleList(data) {
    return request({
      url: '/Employee/GetRoleList',
      method: 'get',
      data
    })
  }
  export function GetPermissionsList(data) {
    return request({
      url: '/Employee/GetPermissionsList',
      method: 'get',
      data
    })
  }