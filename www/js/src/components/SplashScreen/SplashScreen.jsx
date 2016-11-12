import React from 'react';
import { browserHistory } from 'react-router';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import Events from '../../events/Events';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

//components
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';

var eventInst = new Events();

//EVENT SETUP
var event = new Event(eventInst.LOGIN_SUCESSFULL);

const style = {
	h2: {
		textAlign: 'center',
		color: '#1c1d1d',
		position: 'absolute',
		top: '1.5em',
		width: '100%'
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
		height: window.innerHeight,
		overflow: 'scroll',
		position: 'relative'
	},
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
	slide: {
		padding: 10,
	},
};

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);

		//bind scope
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
		this.handleSkipLogin = this.handleSkipLogin.bind(this);

		//this.handleRegistration = this.handleRegistration.bind(this);
		this.handleFacebookRegistration = this.handleFacebookRegistration.bind(this);
		//input
		this.handleUpdateInput = this.handleUpdateInput.bind(this);

		this.state = {
			slideIndex: 0,
			showLoginForm: false,
			showRegistrationForm: false,
			dataSource: ['']
		}
	}

	handleChange(value) {
		this.setState({
			slideIndex: value,
		});
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
		this.setState({
			showRegistrationForm: false
		})
	}

	handleSkipLogin() {
		//EVENT SETUP
		var event = new Event(eventInst.SKIP_LOGIN);
		document.dispatchEvent(event);

		browserHistory.push('/#/home?_k=15v0nx');
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
					<Tabs
						onChange={this.handleChange}
						value={this.state.slideIndex}
						>
						<Tab label="Login" value={0} />
						<Tab label="Register" value={1} />
					</Tabs>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleChange.bind(this)}
						>
						<div>
							<FlatButton
								label="Email Login"
								primary={true}
								keyboardFocused={false}
								onTouchTap={this.handleLogin.bind(this)}
								/><br/>
							<FlatButton
								disabled={true}
								label="Facebook Login"
								primary={true}
								keyboardFocused={false}
								onTouchTap={this.handleFacebookLogin.bind(this)}/><br />
							<FlatButton
								label="Skip (dev only)"
								primary={true}
								keyboardFocused={false}
								onTouchTap={this.handleSkipLogin}
							    //href="/home"
								/><br/>
						</div>
						<div style={style.slide}>
							<FlatButton
								label="Email Registration"
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
						</div>
					</SwipeableViews>
				</div>
			)
		}

		return(
			<div style={style.viewWrap}>
				{adequateComponent}
			</div>
		);
	}
}

export default SplashScreen;