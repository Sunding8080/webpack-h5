import request from 'assets/js/request'
import 'assets/style/index.css'

/* eslint-disable-next-line */
console.log('processEnv:', processEnv)

request({
  method: 'get',
  url: '/api/user',
}).then((res) => {
  /* eslint-disable-next-line */
  console.log(res)
})

// 热更新
// @ts-ignore
module?.hot?.accept()
