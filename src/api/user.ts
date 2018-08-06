import ajax from './axios'
// 查询用户权限,登录接口
interface login {
  params: any
}

export const login = (params: login) => {
  return ajax.post('/login', params)
}
