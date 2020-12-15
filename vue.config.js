module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/corsa-builder/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
