$(document).ready(function() {
	prettyPrint();

	console.log = function () {
		var args = Array.prototype.slice.call(arguments);
		var textToShow = args.join(' ');
		$('.console').html($('.console').html() + textToShow + '\n');
	};

	$('pre.code').each(function(i, jsElement) {
		var js = $(jsElement).text();
		var runJsLink = $('<a class="controls-go" href="#">Do it</a>').appendTo(jsElement);
		runJsLink.click(function () {
			eval(js);
		});
	});
});