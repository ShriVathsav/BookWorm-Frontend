module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://4j5jc4gcn7.execute-api.ap-south-1.amazonaws.com/dev/',
        changeOrigin: true
      },
    }
  }
}
