import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import Events from '../../../events/Events';
import { browserHistory } from 'react-router';
import cookies from 'browser-cookies';
import configuration from '../../../configuration/configuration.js';
import generalStore from '../../../store/GeneralStore/GeneralStore.js';

var eventInst = new Events();

//EVENT SETUP
var event = new Event(eventInst.LOGIN_SUCESSFULL);

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginCancel = props.handleLoginCancel;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpdateInput = this.handleUpdateInput.bind(this);
		this.handlePasswordUpdateInput = this.handlePasswordUpdateInput.bind(this);

		this.state = {
			dataSource: [''],
			loginName: '',
			password: ''
		}
	}

	handleUpdateInput(str) {
		this.setState({
			loginName: str
		});
	}

	handlePasswordUpdateInput(str) {
		this.setState({
			password: str
		});
	}

	checkLoginDetails() {
		var cookieStr = cookies.get(configuration.cookieKey + this.state.loginName);
		var cookiesCust = JSON.parse(cookieStr);

		if (cookiesCust === null) {
			alert('User with that name does not exist.');
			return true;
		}

		if (cookiesCust.password !== this.state.password) {
			alert('Wrong password');
			return true;
		}

		//set login name in app main store
		generalStore().setUserLogin(this.state.loginName);

		return false;
	}

	handleSubmit() {
		console.log('handleSubmit button after login pressed');

		/* check the login details before letting the user in */
		if (this.checkLoginDetails()) {
			return;
		}

		/* After login screen we should move to the main view of the app */
		//change main view state
		document.dispatchEvent(event);

		//change route
		browserHistory.push('/#/home');
	}

	render() {
		return(
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
					onUpdateInput={this.handlePasswordUpdateInput}
					dataSource={this.state.dataSource}
					floatingLabelText="Password"
					fullWidth={true}
					type='password'
					/>
				<FlatButton
					label="Cancel"
					primary={true}
					keyboardFocused={false}
					onTouchTap={this.handleLoginCancel.bind(this)}
					/>
				<FlatButton
					label="Submit"
					primary={true}
					keyboardFocused={false}
					onTouchTap={this.handleSubmit.bind(this)}
					/>
			</div>
		);
	}
}

export default Login;