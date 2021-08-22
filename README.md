# webpack 前端基础架构

基于 webpack 的构建工具，将逐步扩展、丰富

## 构建说明

```bash
# 安装依赖
yarn install

# 开发模式：在本地启动一个带热重载的服务，使用mocker-api模拟请求
yarn dev

# 开发模式：在本地启动一个带热重载的服务，使用proxy请求代理
yarn dev:proxy

# 开发模式：在本地启动一个带热重载的服务，使用mocker-api模拟请求，并使用eslint做校验
yarn dev:eslint

# 开发模式：在本地启动一个带热重载的服务，使用proxy请求代理，并使用eslint做校验
yarn dev:proxy:eslint

# 测试环境：打包代码
yarn build:dev

# 生产环境：打包代码
yarn build

# 分析打包文件构建
yarn analyse

# 使用eslint校验src文件夹下的js文件
yarn eslint

# 使用eslint修复校验src文件夹下的js文件
yarn eslint:fix

# 使用prettier修复校验src文件夹下的css、json等文件
yarn prettier

# 使用eslint修复src文件夹下js，使用prettier修复校验src文件夹下的css、json等文件
yarn lint
```
