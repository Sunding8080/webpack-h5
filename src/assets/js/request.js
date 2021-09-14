import axios from 'axios'

const instance = axios.create({
  // baseURL, 请求前缀
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

/**
 * 修改请求配置
 */
instance.interceptors.request.use((config) => {
  return config
})

/**
 * 状态码(validateStatus) >=200 <300 执行回调1，否则走异常回调2
 */
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response
    }
    return Promise.reject(response)
  },
  (error) => Promise.reject(error)
)

const request = (params) =>
  instance.request(params).then((rs) => {
    if (rs.data && rs.data.code === 0) {
      return rs.data.data
    }
    return Promise.reject(rs.data)
  })

export default request
