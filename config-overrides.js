const {
  override,
  addLessLoader,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra'); //override是覆写react隐藏的webpack配置
const path = require('path');
module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
);
