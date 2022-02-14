const merge = require('webpack-merge').default
const baseWebpackConfig = require('./webpack.config.base')
const path = require('path')
const apiMocker = require('mocker-api')
const ESLintPlugin = require('eslint-webpack-plugin')

const RUN_API = process.env.RUN_API

const isProxy = RUN_API === 'proxy' // 判断是否用代理
const isMock = RUN_API === 'mock' // 判断是否用mocker-api模拟请求
const isEslint = Boolean(process.env.RUN_ESLINT) // 开发时开启eslint校验

const devWebpackConfig = {
  devServer: {
    open: true, // 启用服务时打开浏览器
    host: 'local-ipv4', // 用ip4启动服务
    liveReload: false, // 关掉自动刷新。使用热重载
    port: 8080, // 端口

    historyApiFallback: {
      rewrites: [{ from: /.*/, to: '/' }],
    }, // 当使用 History API时异常，跳转重定向

    proxy: isProxy
      ? {
          '/test_api': {
            changeOrigin: true, // 代理时会保留主机头的来源
            target: 'http://localhost:3000',
            pathRewrite: { '^/test_api': '' },
          },
        }
      : {},

    onBeforeSetupMiddleware(params) {
      if (isMock) {
        const { app } = params
        apiMocker(app, path.resolve(__dirname, '../mock/mocker.js'))
      }
    }, // devServer 内部的所有中间件执行之前
  },

  plugins: [],
}

if (isEslint) {
  devWebpackConfig.plugins.push(
    new ESLintPlugin({
      extensions: ['js', 'ts'],
    })
  )
}

const webpackConfig = merge(baseWebpackConfig, devWebpackConfig)

module.exports = webpackConfig
