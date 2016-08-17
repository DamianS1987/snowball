import React from 'react';
import { browserHistory } from 'react-router';

console.log('browserHistory: ', browserHistory);

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);

		setTimeout(function() {
			browserHistory.push('/#/forms/autocompleteexample?_k=o8wqnl');
		}, 4000);
	}

	render() {
		return(<div>
			<h2>That's the splash</h2>
			<p>It should fade in and out etc.</p>
		</div>);
	}
}

export default SplashScreen;