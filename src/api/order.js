import request from '@/utils/request'

export function GetEmployeeOrderList(data) {
  return request({
    url: '/Order/GetEmployeeOrderList',
    method: 'post',
    data
  })
}
export function GetCustomerOrderList(data) {
  return request({
    url: '/Order/GetCustomerOrderList',
    method: 'post',
    data
  })
}
