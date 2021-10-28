const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
});
