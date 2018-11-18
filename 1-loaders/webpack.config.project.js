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
					}
				]
			}
		]
	},
};

const merge = require('webpack-merge');
const reusableConfig = require('./webpack.config');
const log = require('./log-object');

const mergedConfig = merge.smart(reusableConfig, projectSpecificConfig);

log(mergedConfig);

module.exports = mergedConfig;
