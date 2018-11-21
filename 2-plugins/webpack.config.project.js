const webpack = require('webpack');

const projectSpecificConfig = {
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

const merge = require('webpack-merge');
const reusableConfig = require('./webpack.config');
const log = require('./log-object');

const mergedConfig = merge.smart(reusableConfig, projectSpecificConfig);

log(mergedConfig);

module.exports = mergedConfig;
