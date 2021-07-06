const path = require('path');
require('dotenv').config();

// Plugins
const HTMLWebpackPlugin		= require('html-webpack-plugin'),
	  HTMLReplacePlugin		= require('html-replace-webpack-plugin'),
	  MiniCSSExtractPlugin	= require('mini-css-extract-plugin'),
	  CopyPlugin			= require('copy-webpack-plugin');

// Paths
const DIR_INPUT		= path.resolve(__dirname, 'src'),
	  DIR_OUTPUT	= path.resolve(__dirname, 'dist'),
	  DIR_ASSETS	= path.resolve(__dirname, 'assets'),
	  DIR_JS		= path.join(DIR_INPUT, 'scripts'),
	  DIR_CSS		= path.join(DIR_INPUT, 'sass'),
	  DIR_PNG		= path.join(DIR_ASSETS, 'png');


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
	devServer: {
		contentBase: DIR_OUTPUT,
		open: false
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(DIR_INPUT, 'index.html'),
			filename: '[name].html',
		}),
		new HTMLReplacePlugin([
			{
				pattern: 'API_KEY',
				replacement: process.env.API_KEY
			}
		]),
		new MiniCSSExtractPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: '**/*.png',
					to: 'assets/[name].png'
				}
			]
		})
	],

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
		]
	}

};