/* eslint-disable-next-line */
console.log('processEnv:', processEnv)

const info = {
  name: "sunding",
  age: 27,
}

console.log(info)

// 热更新
if (module && module.hot) {
  module.hot.accept()
}
