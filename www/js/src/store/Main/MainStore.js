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

var CHANGE_EV = 'store_change';
var eventInst = new Events();
var event = new CustomEvent(CHANGE_EV);

export default function() {

	//add event listener for login submit
	document.addEventListener(eventInst.LOGIN_SUCESSFULL, function() {
		var event = new CustomEvent(CHANGE_EV, {'detail': 'log_user'});
		document.dispatchEvent(event, 'extra args');
	});
	//registration
	document.addEventListener(eventInst.REGISTRATION_SUCESSFULL, function() {
		var event = new CustomEvent(CHANGE_EV, {'detail': 'log_user'});
		document.dispatchEvent(event);
	});

	function addChangeEvent(callback) {
		document.addEventListener(CHANGE_EV, callback);
	}

	function removeChangeEvent(callback) {
		document.removeEventListener(CHANGE_EV, callback);
	}

	function initStartScreen() {
		document.dispatchEvent(event);
	}

	//todo if cookie exists trigger emitChange
	function checkCookies() {
		initStartScreen();
	}

	return {
		addChangeEventListener: addChangeEvent,
		removeChangeEventListener: removeChangeEvent,
		checkCookies: checkCookies
	}
}