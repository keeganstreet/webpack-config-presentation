const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					'ts-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'conference': JSON.stringify('Drupal South')
		})
	],
	...{
		entry: {
			main: './index.ts'
		},
		mode: 'development',
		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		},
		devtool: false,
	},
};
