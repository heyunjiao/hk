import request from '@/utils/request'
export function GetCustomerList(data) {
  return request({
    url: '/Customer/GetCustomerList',
    method: 'post',
    data
  })
}
export function AddCustomer(data) {
  return request({
    url: '/Customer/AddCustomer',
    method: 'post',
    data
  })
}
export function GetMainMemberList(data) {
  return request({
    url: '/Customer/GetMainMemberList',
    method: 'post',
    data
  })
}
export function UpdateCustomer(data) {
  return request({
    url: '/Customer/UpdateCustomer',
    method: 'put',
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
export function GetMemberCardList(data) {
  return request({
    url: '/Customer/GetMemberCardList',
    method: 'get',
    data
  })
}
export function GetCustomer(data) {
  return request({
    url: `/Customer/GetCustomer?customerId=${data}`,
    method: 'get',
    data
  })
}
