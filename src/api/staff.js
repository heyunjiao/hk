import request from '@/utils/request'

export function GetEmployeeList(data) {
  return request({
    url: '/Employee/GetEmployeeList',
    method: 'post',
    data
  })
}
export function GetEmployee(data) {
  return request({
    url: '/Employee/GetEmployee',
    method: 'get',
    params: { employeeId: data }
  })
}
export function AddEmployee(data) {
  return request({
    url: '/Employee/AddEmployee',
    method: 'post',
    data
  })
}
export function UpdateEmployee(data) {
  return request({
    url: '/Employee/UpdateEmployee',
    method: 'put',
    data
  })
}

export function GetEmployeeOrderList(data) {
  return request({
    url: '/Order/GetEmployeeOrderList',
    method: 'post',
    data
  })
}

