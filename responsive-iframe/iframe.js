// Get height of the main element in the iframe document
var documentHeight = document.getElementsByClassName('main-element')[0].scrollHeight;

// Add some unique identifier to the string being passed
var message = 'documentHeight:'+documentHeight;

// Pass message to (any*) parent document
parent.postMessage(message,'*');


// On resize of the window, recalculate the height of the main element, and pass to the parent document again
window.onresize = function() {
	var newDocumentHeight = document.getElementsByClassName('main-element')[0].scrollHeight;
	var heightDiff = documentHeight - newDocumentHeight;

	// If difference between current height and new height is more than 10px
	if ( heightDiff > 10 | heightDiff < -10 ) {

		documentHeight = newDocumentHeight;
		message = 'documentHeight:'+documentHeight;
		parent.postMessage(message,'*');
	}
	
} ;


