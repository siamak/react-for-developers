/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	precss            = require('precss'),
	cssnano           = require('cssnano'),
	OpenBrowserPlugin = require('open-browser-webpack-plugin');

var configServe = {
	port: 3000,
};


module.exports = {
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		progress: true,
		port: configServe.port,
	},

	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:' + configServe.port,
		path.resolve(__dirname, './src/app.js'),
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

	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoErrorsPlugin(),
		new webpack.IgnorePlugin(/\/iconv-loader$/),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:' + configServe.port })
	],

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	stats: {
		// Nice colored output
		colors: true,
	},

	node: {
		net: 'empty',
		tls: 'empty'
	},
	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
