'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require ('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
      minify: {}
    }),

    new webpack.DefinePlugin({
      __PROD__: true
    }),

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false, sequences: false},
      sourceMap: false
    }),

    new webpack.optimize.DedupePlugin()
  ]

})
