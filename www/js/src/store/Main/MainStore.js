/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import Events from '../../events/Events';
var Dispatcher = require('flux').Dispatcher;

console.log('dis: ', Dispatcher);

var mainDispatcher = new Dispatcher();
var mainStore = {
	'currentView': null
};

var CHANGE_EV = 'store_change';
var eventInst = new Events();
var event = new Event(CHANGE_EV);

//dispatcher setup
//mainDispatcher.register(function(payload) {
//	console.log('payload registered', payload)
//
//	if (payload.actionType === 'update') {
//		mainStore.currentView = payload.currentView;
//	}
//});
//
//mainDispatcher.dispatch({
//	actionType: 'update',
//	currentView: 'login page'
//});

export default function() {

	//add event listener for Spacebar
	//document.addEventListener(eventInst.SPACE, function() {
	//	emitChange();
	//});

	function addChangeEvent(callback) {
		document.addEventListener(CHANGE_EV, callback);
	}

	function removeChangeEvent(callback) {
		console.log('remove ev');

		document.removeEventListener(CHANGE_EV, callback);
	}

	function emitChange() {

		console.log('emit change')
		document.dispatchEvent(event, null, true);
	}

	//todo if cookie exists trigger emitChange
	function checkCookies() {
		emitChange();
	}

	return {
		addChangeEventListener: addChangeEvent,
		removeChangeEventListener: removeChangeEvent,
		checkCookies: checkCookies
	}
}