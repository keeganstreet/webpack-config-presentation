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
