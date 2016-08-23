import React from 'react';
import { browserHistory } from 'react-router';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const style = {
	h2: {
		color: '#886aea',
		textAlign: 'center'
	},
	imgWrap: {
		textAlign: 'center'
	},
	img: {
		margin: 'auto',
		minWidth: 320,
		minHeight: 240
	},
	viewWrap: {
		padding: '1em',
		background: '#f8f8f8'
	}
};

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
		this.handleRegistration = this.handleRegistration.bind(this);
		this.handleFacebookRegistration = this.handleFacebookRegistration.bind(this);
		//input
		this.handleUpdateInput = this.handleUpdateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			showLoginForm: false,
			dataSource: ['']
		}
	}

	handleLogin() {
		console.log('login button cliecked');
		this.setState({
			showLoginForm: true
		});
	}

	handleFacebookLogin() {
		console.log('handleFacebookLogin clicked');
	}

	handleRegistration() {
		console.log('register button clicked');
	}

	handleFacebookRegistration() {
		console.log('facebook registration clicked');
	}

	handleUpdateInput() {
		console.log('handle input update');
	}

	handleSubmit() {
		console.log('handleSubmit button after login pressed');

		/* After login screen we should move to the main view of the app */
	}

	render() {
		var adequateComponent;

		if (this.state.showLoginForm) {
			adequateComponent = (
				<div>
					<AutoComplete
						hintText="Type your login name"
						onUpdateInput={this.handleUpdateInput}
						dataSource={this.state.dataSource}
						floatingLabelText="Login"
						fullWidth={true}
						/>
					<AutoComplete
						hintText="Type your password"
						onUpdateInput={this.handleUpdateInput}
						dataSource={this.state.dataSource}
						floatingLabelText="Password"
						fullWidth={true}
					    type='password'
						/>
					<FlatButton
						label="Submit"
						primary={true}
						keyboardFocused={false}
						onTouchTap={this.handleSubmit.bind(this)}
						/>
				</div>
			);
		} else {
			adequateComponent = (
				<div>
					<FlatButton
						label="Login"
						primary={true}
						keyboardFocused={false}
						onTouchTap={this.handleLogin.bind(this)}
						/>
					<FlatButton
						label="Facebook Login"
						primary={true}
						keyboardFocused={false}
						onTouchTap={this.handleFacebookLogin.bind(this)}
						/>
					<Divider/>
					<FlatButton
						label="Registration"
						primary={true}
						keyboardFocused={false}
						onTouchTap={this.handleRegistration.bind(this)}
						/>
					<FlatButton
						label="Facebook Registration"
						primary={true}
						keyboardFocused={false}
						onTouchTap={this.handleFacebookRegistration.bind(this)}
						/>
					<Divider/>

					<p>This view should provide user with the options to login/register.</p>
					<p>The first login/register option done will be email. In the next versions social media login should be available.</p>
				</div>
			)
		}

		return(<div style={style.viewWrap}>
			<div style={style.imgWrap}>
				<img style={style.img} src='http://loremflickr.com/320/240/snowman'/>
			</div>
			<h2 style={style.h2}>That's the start screen</h2>
			{adequateComponent}
		</div>);
	}
}

export default SplashScreen;