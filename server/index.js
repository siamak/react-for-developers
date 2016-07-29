/* eslint-disable */
var express = require("express"),
	Twit      = require('twit'),
	moment    = require('moment'),
	url       = require('url'),
	http      = require('http'),
	https     = require('https');

var PORT = 3001;

var twitter = new Twit({
	consumer_key       : '{CONSUMER_KEY}',
	consumer_secret    : '{CONSUMER_SECRET}',
	access_token       : '{ACCESS_TOKEN}',
	access_token_secret: '{ACCESS_TOKEN_SECRET}',
	timeout_ms         : 60 * 1000, // optional HTTP request timeout to apply to all requests.
})

var app = express();

// CORS
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
	next();
});

// Get tweets containing keyword
app.get('/tweets', function(req, res) {
	twitter.get('search/tweets', {
		q: '#' + typeof req.query.search == 'undefined' || "irDevConf",
		count: req.query.limit || 30
	}, function(err, data, response) {
		res.json(data.statuses.map(function(item) {
			item.from_now = moment(item.created_at, "ddd MMM DD HH:mm:ss Z YYYY").locale('fa').fromNow()

			var profile_image_url = encodeURIComponent(new Buffer(item.user.profile_image_url_https.replace("_normal", "")).toString('base64'))
			profile_image_url = 'http://178.63.163.126:' + PORT + '/image?url=' + profile_image_url;

			item.user.profile_image_url_https = profile_image_url

			return item;
		}))
    })
});

// Get user profile for specific username
app.get('/user/:id', function(req, res) {
	twitter.get('users/show', {
		screen_name: req.params.id,
		count: 100
	}, function(err, data, response) {
		res.json(data)
	})
})

// Proxy twitter images
app.get('/image', function(req, res) {
	var parts = url.parse(req.url, true);
	var imageUrl = parts.query.url;
	imageUrl = new Buffer(imageUrl, 'base64').toString('ascii')

	parts = url.parse(imageUrl);

	var filename = parts.pathname.split("/").pop();

	var options = {
		port: (parts.protocol === "https:" ? 443 : 80),
		host: parts.hostname,
		method: 'GET',
		path: parts.path,
		accept: '*/*'
	};

	var request = (options.port === 443 ? https.request(options) : http.request(options));

	request.addListener('response', function(proxyResponse) {
		var offset = 0;
		var contentLength = parseInt(proxyResponse.headers["content-length"], 10);
		var body = new Buffer(contentLength);

		proxyResponse.setEncoding('binary');
		proxyResponse.addListener('data', function(chunk) {
			body.write(chunk, offset, "binary");
			offset += chunk.length;
		});

		proxyResponse.addListener('end', function() {
			res.contentType(filename);
			res.write(body);
			res.end();
		});
	});

	request.end();
});


// Boom.
app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '.');
});
