'use strict';
const webpack = require('webpack');
const path = require('path');
module.exports = function() {
  return [{
    entry: './public_html/script/main/index.cp.js',
    output: {
      path: path.resolve('./public_html/dist'),
      publicPath: 'dist/',
      filename: 'index.cp.min.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules).*\.js/, loader: 'babel-loader?presets[]=es2015' },
        { test: /\.(sa|s?c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }, {
    entry: './public_html/script/main/index.js',
    output: {
      path: path.resolve('./public_html/dist'),
      publicPath: 'dist/',
      filename: 'index.min.js'
    },
    module: {
      rules: [
        { test: /\.(sa|s?c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }, {
    entry: './public_html/script/diversions/index.js',
    output: {
      path: path.resolve('./public_html/dist'),
      publicPath: 'dist/',
      filename: 'diversions.min.js'
    },
    module: {
      rules: [
        { test: /\.(sa|s?c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }];
};
