module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        //target: 'https://4j5jc4gcn7.execute-api.ap-south-1.amazonaws.com/dev/',
        target: "https://nyg2dwhe69.execute-api.ap-south-1.amazonaws.com/prod",
        changeOrigin: true
      },
    }
  }
}
