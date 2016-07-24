import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { Link, Router, Route, hashHistory } from 'react-router';

export default class DrawerUndockedExample extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	render() {
		return (
			<div>
				<Drawer
					docked={false}
					width={200}
					open={this.props.open}
					onRequestChange={(open) => this.props.handleClose({open})}
					>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/home"><MenuItem primaryText="Home" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/about"><MenuItem primaryText="About" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/gridlist"><MenuItem primaryText="GridList" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/avatar"><MenuItem primaryText="Avatar" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/forms/autocompleteexample"><MenuItem primaryText="Form AutoComplete" /></Link></MenuItem>
				</Drawer>
			</div>
		);
	}
}