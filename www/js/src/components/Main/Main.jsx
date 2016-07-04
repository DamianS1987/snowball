import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { Link, Router, Route, hashHistory } from 'react-router';

//flux store
import store from '../../store/Main/MainStore.js';

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

//scrollable list
import GridListExampleSimple from '../ScrollableList/scrollablelist.jsx';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.leftButtonTapPress = this.leftButtonTapPress.bind(this);
        this.storeChangeEmitted = this.storeChangeEmitted.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.store = store();
    }

    componentWillMount() {
        if (!this.state || !this.state.openDrawer) {
            this.state = {};
            this.state.openDrawer = false;
        }
        this.store.addChangeEventListener(this.storeChangeEmitted);
    }

    storeChangeEmitted() {
        alert('storeChangeEmitted');
    }

    componentWillUnmount() {
        console.log('component will unmount');

        this.store.removeChangeEventListener(this.storeChangeEmitted);
    }

	handleClose() {
		this.setState({openDrawer: false});
	}

    leftButtonTapPress() {
        this.setState({openDrawer: true});
    }

    render () {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AppBar title="My AppBar"
                        onLeftIconButtonTouchTap={this.leftButtonTapPress}
                        iconElementRight={
                          <IconMenu
                            iconButtonElement={
                              <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                          >
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                          </IconMenu>
                        }
                        />
                </MuiThemeProvider>

                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <DrawerUndockedExample open={this.state.openDrawer} handleClose={this.handleClose} />
                </MuiThemeProvider>

                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    { this.props.children }
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Main;