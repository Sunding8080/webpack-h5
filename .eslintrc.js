const path = require('path')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    // 'prettier',
  ], // 从前往后执行
  plugins: ['@typescript-eslint'],
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
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  globals: {
    processEnv: 'readonly',
  },
}
