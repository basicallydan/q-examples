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

var third = function () {
	var d = Q.defer();
	console.log('Third one');
	setTimeout(d.resolve, 2500);
	throw new Error('Awww sheeeeiiiit');
};

var fourth = function () {
	var d = Q.defer();
	console.log('Fourth one');
	setTimeout(d.resolve, 2500);
	return d.promise;
};

first().
then(second).
then(third, function (error) {
	console.log('Something went wrong in 1-2: ' + error.message);
})
.then(fourth, function (error) {
	console.log('Something went wrong in 1-3: ' + error.message);
});