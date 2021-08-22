const merge = require('webpack-merge').default
const prodWebpackConfig = require('./webpack.config.prod')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = merge(prodWebpackConfig, {
  plugins: [new BundleAnalyzerPlugin()],
})

module.exports = webpackConfig
