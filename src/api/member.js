import request from '@/utils/request'
export function GetCustomerList(data) {
  return request({
    url: '/Customer/GetCustomerList',
    method: 'post',
    data
  })
}
export function ActivateCustomer(data) {
  return request({
    url: '/Customer/ActivateCustomer',
    method: 'put',
    data
  })
}
