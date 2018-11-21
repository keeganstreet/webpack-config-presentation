const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const log = require('./log-object');

const projectConfig = {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'cowsay-loader',
            options: {
              header: 'Moo DrupalSouth!'
            }
          },
          'babel-loader',
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'city': JSON.stringify('Canberra')
    })
  ],
};

const mergedConfig = merge.smart(
  baseConfig, projectConfig);

log(mergedConfig);

module.exports = mergedConfig;
