const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [ // 绝对路径
        path.join(__dirname, 'src/assets/styles/variables.less'),
        path.join(__dirname, 'src/assets/styles/mixins.less')
      ]
    }
  }
})
