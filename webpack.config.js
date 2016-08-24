const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbonIncludes = require("bourbon").includePaths;
const bourbonNeatIncludes = require("bourbon-neat").includePaths;
console.log(bourbonIncludes.concat(bourbonNeatIncludes));

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  sassLoader: {
    includePaths: bourbonIncludes.concat(bourbonNeatIncludes)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ],
  }
};
