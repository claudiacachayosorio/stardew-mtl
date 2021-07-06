const path = require('path');
require('dotenv').config();

// Plugins
const HtmlWebpackPlugin		= require('html-webpack-plugin'),
	  HtmlInlineSVGPlugin 	= require('html-webpack-inline-svg-plugin'),
	  HtmlReplacePlugin		= require('html-replace-webpack-plugin'),
	  MiniCssExtractPlugin	= require('mini-css-extract-plugin'),
	  ImageMinimizerPlugin	= require('image-minimizer-webpack-plugin');

// Paths
const DIR_INPUT		= path.resolve(__dirname, 'src'),
	  DIR_OUTPUT	= path.resolve(__dirname, 'dist'),
	  DIR_JS		= path.join(DIR_INPUT, 'scripts');


module.exports = {

	entry: {
		index: path.join(DIR_JS, 'index.js')
	},
	output: {
		filename: '[name].js',
		path: DIR_OUTPUT,
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]'
	},

	mode: 'none',
	devtool: 'source-map',
	optimization: {
		minimize: true
	},
	devServer: {
		contentBase: DIR_OUTPUT,
		open: false
	},

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.(c|s[ac])ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(DIR_INPUT, 'index.html'),
			filename: '[name].html',
		}),
		new HtmlReplacePlugin([
			{
				pattern: 'API_KEY',
				replacement: process.env.API_KEY
			}
		]),
		new HtmlInlineSVGPlugin(),
		new MiniCssExtractPlugin(),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					'optipng',
					'svgo'
				]
			}
		})
	]

};