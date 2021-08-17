const path = require('path')

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './build/webpack.config.prod.js'),
      },
    },
  },
  rules: {
    semi: ['error', 'never'], // 要求或禁止使用分号代替

    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        json: 'never',
      },
    ],
  },
  globals: {
    processEnv: 'readonly',
  },
}
