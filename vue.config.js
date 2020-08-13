module.exports = {
  publicPath: 'https://ahmedbassell.github.io/',
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Ahmed Bassell - Personal Website'
      return args
    })
  }
}