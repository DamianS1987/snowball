import React from 'react';
import { browserHistory } from 'react-router';

console.log('browserHistory: ', browserHistory);

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(<div>
			<h2>That's the splash</h2>
			<p>This view should provide user with the options to login/register.</p>
			<p>The first login/register option done will be email. In the next versions social media login should be available.</p>
		</div>);
	}
}

export default SplashScreen;