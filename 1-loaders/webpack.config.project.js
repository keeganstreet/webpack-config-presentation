const log = require('./log-object');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const projectConfig = {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: []
      }
    ]
  },
};

const mergedConfig = merge.smart(
  baseConfig, projectConfig);

log(mergedConfig);

module.exports = mergedConfig;
