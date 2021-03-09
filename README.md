# yao-tools

前端函数工具库模板

## 介绍

yao-tools 是一个工具库的模板

## 查看文档

```sh
yarn run docs
```

## 安装

```sh
// yarn
yarn add yao-tools -S

// npm
npm install yao-tools -S
```

通过`<script>`标签来直接使用

指定版本：

```html
<script src="dist/yao-tools.min.js"></script>
```

ES 模块版本

```html
<script src="dist/yao-tools.esm.browser.js"></script>
```

## 使用

`js`

```js
import { isAndroid } from 'yao-tools'
const isDeviceAndroid = isAndroid()
```

## 打包

| 类型 | 文件名               | 功能                                        |
| :--: | :------------------- | :------------------------------------------ |
| cjs  | yao-tools.cjs.js | CommonJS，适用于 Node 和 Browserify/Webpack |
| umd  | yao-tools.umd.min.js | 通用模块定义，以 amd，cjs 和 iife 为一体    |
| esm  | yao-tools.esm.js | 软件包保存为 ES 模块文件                    |

## 依赖

### Rollup

| 插件名 | 来源 | 说明 |
| :-: | :-: | :-- |
| `rollup-plugin-cleaner` | 社区 | 每次 build 前清除上一次的构建目录 |
| `rollup-plugin-terser` | 社区 | 采用 Terser 压缩 JavaScript |
| `rollup-plugin-typescript2` | 社区 | ts 转 js 的编译器 |
| `@rollup/plugin-replace` | 官方 | 自动替换文件中的环境变量 |
| `@rollup/plugin-node-resolve` | 官方 | 提供打包引入库的功能 |
| `@rollup/plugin-commonjs` | 官方 | 解决 rollup.js 无法识别 CommonJS 模块 |
| `@rollup/plugin-json` | 官方 | 提供导入 json 文件功能 |
| `@rollup/babel` | 官方 | 用于处理 es6 代码的转换，使转换出来的代码可以用于不支持 es6 的环境使用 |

### Babel

|              依赖名               | 说明                      |
| :-------------------------------: | :------------------------ |
|           `@babel/core`           | Babel 核心依赖            |
|        `@babel/preset-env`        | Babel 默认预设            |
|         `@babel/runtime`          | Babel helper 辅助函数依赖 |
|     `@babel/runtime-corejs3`      | Babel polyfill 填充库     |
| `@babel/plugin-transform-runtime` | 对 Babel 各依赖联动管理   |
