var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
moduel.exports = {
	entry:'./js/app.tsx',
	output:{
		filename:'./pack/all.js'
	},
	module:{
		loaders:[
			{
				test: /.jsx$/,
				exclude: '/node_modules/',
				loader: 'babel-loader?presets[]=react'
			},
			// 加载less
			{
				test: /.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}