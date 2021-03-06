const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index_bundle.js',
		assetModuleFilename: 'img/[name][ext]'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				use: 'babel-loader',
				include: /src/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
