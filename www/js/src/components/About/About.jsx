import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import cookie from 'browser-cookies';
import configuration from '../../configuration/configuration.js';
import generalStore from '../../store/GeneralStore/GeneralStore.js';

class AboutPage extends React.Component {

	constructor(props) {
		super(props);

		this.leftButtonTapPress = this.leftButtonTapPress.bind(this);

		this.state = {
			open: false,
		};
	}

	leftButtonTapPress() {
		this.setState({openDrawer: true});
	}

	handleOpen() {
		this.setState({open: true});
	}

	handleClose() {
		this.setState({open: false});
	}

	returnCookies() {
		var loginName = generalStore().getUserLogin();
		return  cookie.get(configuration.cookieKey + loginName);
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
			<FlatButton
				label="Discard"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div>
				<div className="content">This is content of about page</div>
				<p>The buttons below will check the login details taken from cookies for the current user:</p>

				<RaisedButton label="Alert" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					>
					<p>Cookies details:</p>
					{this.returnCookies()}
				</Dialog>
			</div>
		);
	}
}

export default AboutPage;