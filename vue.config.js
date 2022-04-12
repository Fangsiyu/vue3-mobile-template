const { defineConfig } = require('@vue/cli-service')
// const path = require('path')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    // proxy: 'http://localhost:4000'
  },
  configureWebpack: {
    plugins: [
    ]
  },
  css: {
    loaderOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
      //   // `primary` is global variables fields name
      //   globalVars: {
      //     primary: '#42b983'
      //   }
      // }
    }
  }
})
