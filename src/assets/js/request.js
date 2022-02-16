import axios from 'axios'

const createInstance = () => {
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
  instance.interceptors.request.use(
    (config) => config,
    (error) => {
      const { message } = error
      console.log(message)
      return Promise.reject(error)
    }
  )

  /**
   * 状态码(validateStatus) >=200 <300 执行回调1，否则走异常回调2
   */
  instance.interceptors.response.use(
    (res) => {
      const { status, data } = res
      if (status === 200) {
        // 可以在这里统一处理200状态码下的非正常情况
        if (data?.code !== 0) {
          console.log('接口错误')
        }
        return data
      } else {
        console.log('服务异常')
        return Promise.reject(status)
      }
    },
    (error) => {
      // 请求超时或者404时
      const { message } = error
      console.log(message)
      return Promise.reject(error)
    }
  )

  return instance
}

const instance = createInstance()

const request = (params) => instance.request(params)

export default request
