const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 config 설정
  addWebpackAlias,
  override,
} = require("customize-cra")

const path = require('path')

// 사용자 정의 webpack 설정
module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@layout': path.resolve(__dirname, 'src/layout'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@provider': path.resolve(__dirname, 'src/provider'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  })
)