var Q = require("q");

var first = function () {
    var d = Q.defer();
    console.log('First one');
    setTimeout(d.resolve, 1000);
    return d.promise;
};

var second = function () {
	var d = Q.defer();
	console.log('Second one');
	setTimeout(d.resolve, 1500);
	return d.promise;
};

// This fuction throws an error which later on we show will be handled
var third = function () {
	var d = Q.defer();
	console.log('Third one');
	setTimeout(d.resolve, 2500);
	throw new Error('Awww sheeeeiiiit');
};

// This function will not be reached because the previous one is going to fall over.
var fourth = function () {
	var d = Q.defer();
	console.log('Fourth one');
	setTimeout(d.resolve, 2500);
	return d.promise;
};

first()
.then(second)
.then(third)
.then(fourth, function (error) {
	console.log('Something went wrong in 1-3: ' + error.message);
})
// We are not returning the promise chain, so we need to call done() to ensure unhandled errors are rethrown
.done();