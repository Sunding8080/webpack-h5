/**
 * 插件在 Presets 前运行。
 * 插件顺序从前往后排列。
 * Preset 顺序是颠倒的（从后往前）。
 * **/

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
}
