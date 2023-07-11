import request from '@/utils/request'
export function login(data) {
  return request({
    url: '/System/Login',
    method: 'post',
    data
  })
}
export function logout(data) {
  return request({
    url: '/Employee/logout',
    method: 'post',
    data
  })
}
export function getInfo(data) {
  return request({
    url: '/Employee/getInfo',
    method: 'post',
    data
  })
}
