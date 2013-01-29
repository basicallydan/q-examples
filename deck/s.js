var util = require('util'),
	express = require('express'),
	request = require('request'),
	app = express(),
	port = 88;

app.use(express.static(__dirname));

app.get('/hnfrontpage', function (req, res) {
	request({ url : 'http://hndroidapi.appspot.com/news/format/json/page/1?appid=QExamples&callback=', json : true }, function (err, response, body) {
		console.log('Sending body');
		res.send(body);
	});
});

app.listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');