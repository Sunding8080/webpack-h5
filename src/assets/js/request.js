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
  (res) => {
    const { status, data } = res
    if (status === 200) {
      if (data?.code !== 0) {
        console.log('请求异常')
      }
      return data
    } else {
      console.log('服务异常')
      return Promise.reject(status)
    }
  },
  (error) => {
    console.log('网路异常')
    Promise.reject(error)
  }
)

const request = (params) => instance.request(params)

export default request
