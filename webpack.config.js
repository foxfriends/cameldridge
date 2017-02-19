'use strict';
const webpack = require('webpack');

module.exports = function() {
  return [{
    entry: './public_html/script/main/index.cp.js',
    output: {
      path: './public_html/dist',
      publicPath: 'dist/',
      filename: 'index.cp.min.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules).*\.js/, loader: 'babel-loader?presets[]=es2015' },
        { test: /\.s(a|c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }, {
    entry: './public_html/script/main/index.js',
    output: {
      path: './public_html/dist',
      publicPath: 'dist/',
      filename: 'index.min.js'
    },
    module: {
      rules: [
        { test: /\.s(a|c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }, {
    entry: './public_html/script/games/index.js',
    output: {
      path: './public_html/dist',
      publicPath: 'dist/',
      filename: 'games.min.js'
    },
    module: {
      rules: [
        { test: /\.s(a|c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!sass-loader' },
        { test: /\.(gif|svg|png|jpe?g)$/, loader: 'file-loader?name=images/[hash].[ext]!img-loader' }
      ]
    }
  }];
};
