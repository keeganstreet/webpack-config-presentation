module.exports = {
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				use: [
					'ts-loader'
				]
			}
		]
	},
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
