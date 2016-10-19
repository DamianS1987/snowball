import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router';

export default class DrawerUndockedExample extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentWillMount() {
		console.log('mounted');
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
					<MenuItem
						onTouchTap={this.props.handleClose}
						containerElement={<Link to="/home"/>}
						primaryText="Home">
					</MenuItem>
					<MenuItem
						onTouchTap={this.props.handleClose}
						containerElement={<Link to="/about"/>}
						primaryText="About">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/gridlist"/>}
						primaryText="GridList">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
					          containerElement={<Link to="/gridlist2"/>}
					          primaryText="GridList2">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/avatar"/>}
						primaryText="Avatar">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/forms/autocompleteexample"/>}
						primaryText="Auto Complete">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/badge"/>}
						primaryText="Badge">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/tooltips"/>}
						primaryText="Tooltips">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/cards"/>}
						primaryText="Cards">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/chip"/>}
						primaryText="Chip">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/dialog"/>}
						primaryText="Dialog">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/sliders"/>}
						primaryText="Sliders">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/steppers"/>}
						primaryText="Steppers">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
						containerElement={<Link to="/tabs"/>}
						primaryText="Tabs">
					</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}
					          containerElement={<Link to="/posts"/>}
					          primaryText="Posts">
					</MenuItem>
				</Drawer>
			</div>
		);
	}
}