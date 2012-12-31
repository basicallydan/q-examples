var Q = require('q');
var request = require('request');

var getData = function () {
	var d = Q.defer();
	request({ url : 'http://hndroidapi.appspot.com/news/format/json/page/1?appid=QExamples&callback=', json : true }, function (err, response, body) {
		if (err) {
			var error = new Error('Something went wrong trying to get HN Articles');
			error.innerError = err;
			throw error;
		}

		d.resolve(body);
	});
	return d.promise;
};

var countPoints = function (data) {
	var d = Q.defer();
	var i = 0;
	var numPoints = 0;

	for ( ; i < data.items.length; i++) {
		if (data.items[i].score) {
			numPoints += +(data.items[i].score.split(' ')[0]);
		}
	}

	d.resolve(numPoints);
	return d.promise;
};

var outputResults = function (numberOfPoints) {
	var d = Q.defer();
	console.log('There are currently a total of ' + numberOfPoints + ' points on the Hacker News Frontpage');
};

getData()
.then(countPoints)
.then(outputResults)
.fail(function (error) {
	console.log('Something went wrong: ' + error.message);
});