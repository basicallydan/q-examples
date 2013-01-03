var Q = require("q");

var oneA = function () {
    var d = Q.defer();
	var timeUntilResolve = Math.floor((Math.random()*2000)+1);
    console.log('1A Starting');
    setTimeout(function () {
		console.log('1A Finished');
		d.resolve('1ATime: ' + timeUntilResolve);
    }, timeUntilResolve);
    return d.promise;
};

var oneB = function () {
	var d = Q.defer();
	var timeUntilResolve = Math.floor((Math.random()*2000)+1);
	console.log('1B Starting');
	setTimeout(function () {
		console.log('1B Finished');
		d.resolve('1BTime: ' + timeUntilResolve);
    }, timeUntilResolve);
	return d.promise;
};

// This fuction throws an error which later on we show will be handled
var two = function (oneATime, oneBTime) {
	var d = Q.defer();
	console.log('OneA: ' + oneATime + ', OneB: ' + oneBTime);
	console.log('2 Starting and Finishing, so 3A and 3B should start');
	d.resolve();
	return d.promise;
};

var threeA = function () {
    var d = Q.defer();
    console.log('3A Starting');
    setTimeout(function () {
		console.log('3A Finished');
		d.resolve();
    }, Math.floor((Math.random()*2000)+1));
    return d.promise;
};

var threeB = function () {
    var d = Q.defer();
    console.log('3B Starting');
    setTimeout(function () {
		console.log('3B Finished');
		d.resolve();
    }, Math.floor((Math.random()*5000)+1));
    return d.promise;
};

var four = function () {
	console.log('Four is now done');
};

Q.allResolved([ oneA(), oneB() ])
.spread(two)
.then(function () { return Q.all([ threeA(), threeB() ]); })
.then(four)
.done();