import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { notification } from 'antd'

export const createInstance = (axiosConfig: AxiosRequestConfig) => {
  const instance = axios.create(axiosConfig)

  /**
   * 修改请求配置
   */
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error: AxiosError) => {
      console.log(error)
      return Promise.reject(error)
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
          notification.error({
            message: '接口错误',
            description: data.msg,
          })
        }
        return data
      } else {
        notification.error({
          message: '网络或接口错误',
          description: `http状态码：${status}`,
        })
        return Promise.reject(status)
      }
    },
    (error: AxiosError) => {
      // 请求超时或者404时
      notification.error({
        message: '网络错误',
        description: error.message,
      })
      return Promise.reject(error)
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
