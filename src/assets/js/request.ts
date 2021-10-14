import axios from 'axios'

const initRequest = () => {
  const instance = axios.create({
    // baseURL, 请求前缀
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })

  // instance.interceptors.request.use(function (config) {
  //   return config;
  // });

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        return response
      }
      return Promise.reject(response)
    },
    async (error) => Promise.reject(error)
  )
}

const request = async (params) => {
  initRequest()

  return instance.request(params).then((rs) => {
    if (rs.data && rs.data.code === 0) {
      return rs.data.data
    }

    // 做个兼容
    const data = rs.data || {}
    data.toString = function toString() {
      return data.msg || ''
    }

    return Promise.reject(data)
  })
}

export default request
