// Add event listener for messages being massed from the iframe
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";



eventer(messageEvent,function(e) {
	
	// Check that message being passed is the documentHeight
	if (  (typeof e.data === 'string') && (e.data.indexOf('documentHeight') > -1) ) {

		var height = e.data.split('documentHeight:')[1],
		height = parseInt(height) + 50; // add a bit of extra space

		// Change height of iframe
		document.getElementById('myIframe').height = height + 'px';

	} 
},false);
