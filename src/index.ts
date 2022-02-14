import request from 'assets/js/request'
import 'assets/style/index.css'

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

const obj = {
  name: 'sunding',
  age: 27,
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
})

Promise.resolve(true)
  .then((res) => {
    console.log('res:', res)
  })
  .finally(() => {
    console.log('finally')
  })

// 热更新
// @ts-ignore
module?.hot?.accept()
