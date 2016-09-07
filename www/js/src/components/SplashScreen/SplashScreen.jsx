import React from 'react';
import { browserHistory } from 'react-router';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import Events from '../../events/Events';

//components
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';

var eventInst = new Events();

//EVENT SETUP
var event = new Event(eventInst.LOGIN_SUCESSFULL);

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
		//this.handleRegistration = this.handleRegistration.bind(this);
		this.handleFacebookRegistration = this.handleFacebookRegistration.bind(this);
		//input
		this.handleUpdateInput = this.handleUpdateInput.bind(this);

		this.state = {
			showLoginForm: false,
			showRegistrationForm: false,
			dataSource: ['']
		}
	}

	handleLogin() {
		this.setState({
			showLoginForm: true
		});
	}

	handleLoginCancel() {
		this.setState({
			showLoginForm: false
		});
	}

	handleFacebookLogin() {
		console.log('handleFacebookLogin clicked');
	}

	handleRegistration() {
		this.setState({
			showRegistrationForm: true
		});
	}

	handleRegistrationCancel() {
		this.setState({
			showRegistrationForm: false
		});
	}

	handleFacebookRegistration() {
		console.log('facebook registration clicked');
	}

	handleUpdateInput() {
		console.log('handle input update');
	}

	onRegistrationSubmit() {
		console.log('onRegistrationSubmit');
		this.setState({
			showRegistrationForm: false
		})
	}

	render() {
		var adequateComponent;

		if (this.state.showLoginForm) {
			adequateComponent = (
				<Login
					handleLoginCancel={this.handleLoginCancel.bind(this)}
					/>
			);
		} else if (this.state.showRegistrationForm) {
			adequateComponent = (
				<Register
					onRegistrationSubmit={this.onRegistrationSubmit.bind(this)}
					handleRegistrationCancel={this.handleRegistrationCancel.bind(this)}
					/>
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
						disabled={true}
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
						disabled={true}
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