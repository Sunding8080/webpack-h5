import request from 'assets/js/request'

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
if (module && module.hot) {
  module.hot.accept()
}
