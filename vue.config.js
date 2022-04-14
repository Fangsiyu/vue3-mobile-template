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
    open: false
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
      .set('@assets', resolve('src/assets'));
    // config.plugin('html')
    //   .tap( options => [{
    //     template: 'public/index.html',
    //     title: 'vue3-cli',
    //   }])
  }
})
