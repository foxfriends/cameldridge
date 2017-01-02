'use strict';
const webpack = require('webpack');

module.exports = function() {
  return [{
    entry: './public_html/script/index.cp.js',
    output: {
      path: './public_html',
      filename: 'index.cp.min.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules).*\.js/, loader: 'babel-loader?presets[]=es2015' },
        { test: /\.s(a|c)ss$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }, {
    entry: './public_html/script/index.js',
    output: {
      path: './public_html',
      filename: 'index.min.js'
    },
    module: {
      rules: [
        // { test: /\.js$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'babel-loader?plugins[]=transform-es2015-modules-commonjs' },
        { test: /\.s(a|c)ss$/, exclude: /(node_modules|js-modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }];
};
