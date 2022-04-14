const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    // proxy: 'http://localhost:4000'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/less/index.less')]
    }
  },
  configureWebpack: {
    plugins: [
    ]
  },
})
