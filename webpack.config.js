const path = require('path');
const
	HtmlWebpackPlugin		= require('html-webpack-plugin'),
	MiniCssExtractPlugin	= require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: './src/js/index.js',
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		open: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  MiniCssExtractPlugin.loader,
				  'css-loader',
				  'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};