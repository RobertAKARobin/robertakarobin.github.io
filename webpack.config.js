const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: [
		path.resolve(__dirname, './js/main.js'),
		path.resolve(__dirname, './css/styles.scss')
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
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
