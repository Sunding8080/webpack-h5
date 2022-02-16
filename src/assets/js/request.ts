import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const createInstance = (axiosConfig: AxiosRequestConfig) => {
  const instance = axios.create(axiosConfig)

  /**
   * 修改请求配置
   */
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error: AxiosError) => {
      console.log(error)
      Promise.reject(error)
    }
  )

  /**
   * 状态码(validateStatus) >=200 <300 执行回调1，否则走异常回调2
   */
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      const { status, data } = res
      if (status === 200) {
        // 可以在这里统一处理200状态码下的非正常情况
        if (data?.code !== 0) {
          console.log('接口错误')
        }
        return data
      }
      console.log('服务异常')
      return Promise.reject(status)
    },
    (error: AxiosError) => {
      // 请求超时或者404时
      const { message } = error
      console.log(message)
      Promise.reject(error)
    }
  )

  return instance
}

const instance = createInstance({
  // baseURL, 请求前缀
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

export default instance
