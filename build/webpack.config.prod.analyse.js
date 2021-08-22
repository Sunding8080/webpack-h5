const merge = require('webpack-merge').default
const baseWebpackConfig = require('./webpack.config.base')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [new BundleAnalyzerPlugin()],
})

module.exports = webpackConfig
