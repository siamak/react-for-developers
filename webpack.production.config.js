/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	precss            = require('precss'),
	cssnano           = require('cssnano'),
	uglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;


module.exports = {
	entry: [
		path.resolve(__dirname, 'src/app.js'),
	],
	output: {
		path: __dirname,
		filename: './dist/bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.(woff|svg)$/,
				include: path.resolve(__dirname, 'src/assets/'),
				loader: 'file-loader',
				query: {
					name: 'font/[hash].[ext]',
					limit: 5000,
					mimetype: 'application/font-woff'
				}
			},
		],
	},
	postcss: [
		autoprefixer({ browsers: ['last 3 versions'] }),
		precss(),
		cssnano()
	],

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	],


	// Create Sourcemaps for the bundle
	devtool: 'none',
};
