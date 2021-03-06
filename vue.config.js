const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: false, //是否自动弹出浏览器页面
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      '/api': {
        target: 'http://www.96qufei.cn', //API服务器的地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

  },
}