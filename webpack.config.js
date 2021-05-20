const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/js/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};