const merge = require('webpack-merge').default
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {})

module.exports = webpackConfig
