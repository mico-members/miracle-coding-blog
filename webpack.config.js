const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: process.env.PORT || 8080,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new webpack.EnvironmentPlugin({
        WEBPACK_GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        USER_BRANCH: process.env.USER_BRANCH,
      }),
    ],
  };
};
