const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 用于压缩
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 生成css文件
const TerserPlugin = require('terser-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isDevMode = /^(development|local)$/.test(process.env.RUN_ENV) // 判断是否开发环境

module.exports = {
  mode: isDevMode ? 'development' : 'production',

  devtool: isDevMode ? 'source-map' : false,

  entry: path.resolve(__dirname, '../src/index'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].chunk.js',
    clean: true, // 在生成文件之前清空 output 目录
    publicPath: isDevMode ? '/' : './', // 所有资源前缀
  },

  target: ['web', 'es5'],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [path.join(__dirname, '../src')],
      },
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'assets/img/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'assets/media/[name].[ext]',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'assets/fonts/[name].[ext]',
          },
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },

  plugins: [
    new FriendlyErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      minify: true,
    }),

    new webpack.DefinePlugin({
      processEnv: {
        RUN_ENV: `"${process.env.RUN_ENV}"`,
        RUN_API: `"${process.env.RUN_API}"`,
        RUN_ESLINT: `"${process.env.RUN_ESLINT}"`,
      },
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/style/[name].[contenthash:8].css',
      chunkFilename: 'assets/style/styles.[contenthash:8].css', //把css文件单独打包
    }),

    new TerserPlugin(),
  ],
}
