const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir);

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api' : '/new/api'}
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/less/lessVariates.less')]
    }
  },
  configureWebpack: {
    plugins: [
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))
  }
})
