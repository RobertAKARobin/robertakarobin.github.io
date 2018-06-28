const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		path.resolve(__dirname, './src/main.js'),
		path.resolve(__dirname, './src/styles.scss')
	],
	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name]-[hash].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: path.resolve(__dirname, 'index.html'),
			inject: false
		})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: 'none'
						}
					}
				]
			}
		]
	}
}
