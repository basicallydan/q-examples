$(document).ready(function() {
	prettyPrint();

	console.log = function () {
		var args = Array.prototype.slice.call(arguments);
		var textToShow = args.join(' ');
		$('.console').html($('.console').html() + textToShow + '\n');
	};

	$('pre.code').each(function(i, jsElement) {
		$(this).bind('blur', prettyPrint);
		var runJsLink = $('<a class="controls-go" contenteditable="false" href="#">Do it</a>').insertBefore(jsElement);
		runJsLink.click(function () {
			var js = $(jsElement).text();
			eval(js);
		});
	});
});