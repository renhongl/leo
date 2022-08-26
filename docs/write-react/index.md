---
title: 环境准备
tags: [手写React]
---

## 选择工程化开发环境
- webpack作为打包工具
- babel转换高级语法以及jsx语法
  

## 初始化项目

```js
mkdir react-source
cd react-source
npm init -y
```

## 安装webpack
```js
npm install --save-dev webpack webpack-cli
```
## 配置和添加webpack测试环境

在跟目录下，创建webpack.config.js文件
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

在dist文件夹下，创建index.html文件
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>手写React</title>
</head>

<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>

</html>
```

在src文件夹下，创建index.js文件
```js
console.log('start test')
```

在package.json文件中添加运行脚本
```js
"watch": "webpack --watch"
```

## 验证环境
在命令行中运行
```js
npm run watch
```
使用vscode的live server,在浏览器查看页面

如果能在控制台看见**start test**证明环境已经搭建好了


## 添加部分功能，方便开发
使用开发模式，方便使用debugger，在webpack.config.js文件中
```js
mode: "development"
```

查看打包之前的源代码，用于方便检查代码问题，在webpack.config.js文件中
```js
devtool: "inline-source-map"
```