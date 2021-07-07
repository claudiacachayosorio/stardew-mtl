const path = require('path');
require('dotenv').config();

const HTMLWebpackPlugin		= require('html-webpack-plugin'),
	  HTMLInlineSVGPlugin 	= require('html-webpack-inline-svg-plugin'),
	  HTMLReplacePlugin		= require('html-replace-webpack-plugin'),
	  MiniCSSExtractPlugin	= require('mini-css-extract-plugin'),
	  ImageMinimizerPlugin	= require('image-minimizer-webpack-plugin');

// Paths
const DIR_INPUT		= path.resolve(__dirname, 'src'),
	  DIR_OUTPUT	= path.resolve(__dirname, 'dist'),
	  DIR_JS		= path.join(DIR_INPUT, 'scripts');


// Loaders
const rules = [
	{
		test: /\.html$/i,
		loader: 'html-loader'
	},
	{
		test: /\.(c|s[ac])ss$/i,
		use: [
			MiniCSSExtractPlugin.loader,
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
];


// Plugins

const HTMLWebpackConfig = {
	template: path.join(DIR_INPUT, 'index.html'),
	filename: '[name].html',
};

const HTMLReplaceConfig = [
	{
		pattern: 'API_KEY',
		replacement: process.env.API_KEY
	}
];

const ImageMinimizerConfig = {
	minimizerOptions: {
		plugins: [ 'optipng', 'svgo' ]
	}
};

const plugins = [
	new HTMLWebpackPlugin(HTMLWebpackConfig),
	new HTMLReplacePlugin(HTMLReplaceConfig),
	new HTMLInlineSVGPlugin(),
	new MiniCSSExtractPlugin(),
	new ImageMinimizerPlugin(ImageMinimizerConfig)
];


module.exports = {

	entry: {
		index: path.join(DIR_JS, 'index.js')
	},
	output: {
		filename: '[name].js',
		path: DIR_OUTPUT,
		clean: true
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

	plugins,
	module: { rules }

};