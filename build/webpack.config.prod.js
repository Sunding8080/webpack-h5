const merge = require('webpack-merge').default
const prodWebpackConfig = require('./webpack.config.prod')

const webpackConfig = merge(prodWebpackConfig, {})

module.exports = webpackConfig
