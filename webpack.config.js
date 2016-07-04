var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var BUILD_DIR = path.resolve(__dirname, './www/js/destination');
var APP_DIR = path.resolve(__dirname, './www/js/src');


var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new LiveReloadPlugin(/*opts*/)
	],
	watch: true,
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel'
			}
		]
	}
};

module.exports = config;