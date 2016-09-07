import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import Events from '../../../events/Events';
import { browserHistory } from 'react-router';
import cookies from 'browser-cookies';
import configuration from '../../../configuration/configuration.js';

var eventInst = new Events();

//EVENT SETUP
var event = new Event(eventInst.REGISTRATION_SUCESSFULL);

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.handleRegistrationCancel = props.handleRegistrationCancel;
		this.handleRegistrationSubmit                = this.handleRegistrationSubmit.bind(this);
		this.handleRegistrationLoginNameUpdate       = this.handleRegistrationLoginNameUpdate.bind(this);
		this.handleRegistrationPasswordUpdate        = this.handleRegistrationPasswordUpdate.bind(this);
		this.handleRegistrationPasswordConfirmUpdate = this.handleRegistrationPasswordConfirmUpdate.bind(this);

		//state
		this.state = {
			dataSource: [''],
			loginState: '',
			passwordUpdate: '',
			passwordUpdateConfirm: ''
		}
	}

	handleRegistrationPasswordUpdate(passwordString) {
		this.setState({
			passwordUpdate: passwordString
		})
	}

	handleRegistrationLoginNameUpdate(login) {
		this.setState({
			loginState: login
		})
	}

	handleRegistrationPasswordConfirmUpdate(confPasswordString) {
		this.setState({
			passwordUpdateConfirm: confPasswordString
		});
	}

	validateForm() {
		//console.log('validate...', this.state);

		//Login validation
		//* check if anything is in the input
		var loginInputIsValid = this.state.loginState.length > 0;

		//Password validation
		//* check if anything is in the input
		//* check if letters and numbers are in the input
		var passwordIsValid1 = this.state.passwordUpdate.length > 4;
		var passwordIsValid2 = /^\w+$/.test(this.state.passwordUpdate);

		//Confirm Password validation
		//* check if input has the same value as password input
		var passwordConfirmationIsValid = this.state.passwordUpdate === this.state.passwordUpdateConfirm;

		if (loginInputIsValid && passwordIsValid1 && passwordIsValid2 && passwordConfirmationIsValid) {
			return true;
		}

		return false;
	}

	getUserData() {
		return JSON.stringify({
			name: this.state.loginState,
			pass: this.state.passwordUpdate
		});
	}

	handleRegistrationSubmit() {
		//console.log('handle registration button');

		if (!this.validateForm()) {
			return;
		}

		var cookieKey = configuration.cookieKey + this.state.loginState;

		//add the data to the cookies
		cookies.set(cookieKey, this.getUserData(), {expires: 365, secure: true, domain: 'www.example.org'});

		/* On submit validate the registration form */
		document.dispatchEvent(event);

		//change route
		browserHistory.push('/#/home');
	}

	render() {
		return(
			<div>
				<AutoComplete
					hintText="Enter login name"
					floatingLabelText="Login name"
					fullWidth={true}
					dataSource={this.state.dataSource}
				    onUpdateInput={this.handleRegistrationLoginNameUpdate}
					/>
				<AutoComplete
					hintText="Enter your password"
					floatingLabelText="Password"
					fullWidth={true}
					onUpdateInput={this.handleRegistrationPasswordUpdate}
				    floatingLabelText="Password"
				    type="password"
					dataSource={this.state.dataSource}
					/>
				<AutoComplete
					hintText="Confirm your password"
					floatingLabelText="Confirm Password"
					fullWidth={true}
					onUpdateInput={this.handleRegistrationPasswordConfirmUpdate}
					floatingLabelText="Confirm Password"
					type="password"
					dataSource={this.state.dataSource}
					/>
				<FlatButton
					label="Cancel"
					primary={true}
					keyboardFocused={false}
					onTouchTap={this.handleRegistrationCancel}
					/>
				<FlatButton
					label="Register"
				    primary={true}
				    keyboardFocused={false}
				    onTouchTap={this.handleRegistrationSubmit}
					/>
			</div>
		);
	}
}

export default Register;