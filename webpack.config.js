'use strict';
const webpack = require('webpack');

module.exports = [{
  entry: './public_html/script/index.cp.js',
  output: {
    path: './public_html',
    filename: 'index.cp.min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules).*\.js/, loader: 'babel?presets[]=es2015' },
      { test: /\.s(a|c)ss$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'style!css!sass' },
      { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file?name=images/[hash].[ext]!img' }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'js-modules']
  },
  devtool: ['source-map']
}, {
  entry: './public_html/script/index.js',
  output: {
    path: './public_html',
    filename: 'index.min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'babel?plugins[]=transform-es2015-modules-commonjs' },
      { test: /\.s(a|c)ss$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'style!css!sass' },
      { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file?name=images/[hash].[ext]!img' }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'js-modules']
  },
  devtool: ['source-map']
}];
