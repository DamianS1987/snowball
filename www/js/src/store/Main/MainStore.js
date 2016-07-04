import Events from '../../Events/Events';

var CHANGE_EV = 'store_change';

var eventInst = new Events();
var event = new Event(CHANGE_EV);

export default function() {

	//add event listener for Spacebar
	document.addEventListener(eventInst.SPACE, function() {
		emitChange();
	});

	function addChangeEvent(callback) {
		document.addEventListener(CHANGE_EV, callback);
	}

	function removeChangeEvent(callback) {
		console.log('remove ev')

		document.removeEventListener(CHANGE_EV, callback);
	}

	function emitChange() {
		document.dispatchEvent(event);
	}

	return {
		addChangeEventListener: addChangeEvent,
		removeChangeEventListener: removeChangeEvent
	}
}