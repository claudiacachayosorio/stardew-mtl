const path = require('path');
const
	HtmlWebpackPlugin		= require('html-webpack-plugin'),
	MiniCssExtractPlugin	= require('mini-css-extract-plugin'),
	CopyPlugin				= require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: './src/js/index.js'
	},
	mode: 'none',
	devtool: 'source-map',
	devServer: {
		contentBase: './docs',
		open: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: '[name].html',
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: './src/assets/png/**/*.png', to: 'assets/[name].png' },
			],
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs'),
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
			}
		],
	},
};