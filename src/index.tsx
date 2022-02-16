import React from 'react'
import ReactDOM from 'react-dom'
import request from 'assets/js/request'
import App from './App'
import 'assets/style/index.css'
import 'antd/dist/antd.css'

/* eslint-disable-next-line */
console.log('processEnv:', processEnv)

if (processEnv.RUN_API) {
  request({
    method: 'get',
    url: '/api/user',
  }).then((res) => {
    /* eslint-disable-next-line */
    console.log(res)
  })
}

ReactDOM.render(<App />, document.getElementById('root'))

// 热更新
// @ts-ignore
module?.hot?.accept()
