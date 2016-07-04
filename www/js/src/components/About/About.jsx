import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { Link, Router, Route, hashHistory } from 'react-router';

//theme components
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//drawer
import DrawerUndockedExample from '../UI/Drawer/drawer.jsx';
import Header from '../Header/header.jsx';

//App bar
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { browserHistory } from 'react-router';

//colors
import {cyan500} from 'material-ui/styles/colors';

class AboutPage extends React.Component {

	constructor(props) {
		super(props);

		this.leftButtonTapPress = this.leftButtonTapPress.bind(this);
	}

	componentWillMount() {
		if (!this.state || !this.state.openDrawer) {
			this.state = {};
			this.state.openDrawer = false;
		}
	}

	leftButtonTapPress() {
		this.setState({openDrawer: true});
	}

	render() {

		return (
			<div>
				<div className="content">aaa</div>
			</div>
		);
	}
}

export default AboutPage;