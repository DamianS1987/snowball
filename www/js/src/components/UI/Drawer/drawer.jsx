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
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/badge"><MenuItem primaryText="Badge" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/tooltips"><MenuItem primaryText="Tooltips" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/cards"><MenuItem primaryText="Cards" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/chip"><MenuItem primaryText="Chip" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/dialog"><MenuItem primaryText="Dialog" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/sliders"><MenuItem primaryText="Sliders" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/steppers"><MenuItem primaryText="Steppers" /></Link></MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}><Link to="/tabs"><MenuItem primaryText="TabsComponent" /></Link></MenuItem>
				</Drawer>
			</div>
		);
	}
}