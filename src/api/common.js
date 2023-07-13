import request from "@/utils/request";

export function UploadPicture(data) {
    return request({
      url: '/System/UploadPicture',
      method: 'post',
      data
    })
  }