import ajax from './axios'
// 查询用户权限,登录接口
interface login {
  params: any
}

export const studentsList = (params: login) => {
  return ajax.get('/students', params)
}

export const deleteStudent = (params: number) => {
  return ajax.post(`/student/delete/${params}`)
}