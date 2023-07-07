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
   params:{employeeId: data} 
  })
}

