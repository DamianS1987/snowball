import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { Link, Router, Route, browserHistory } from 'react-router';

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

//colors
import {cyan500} from 'material-ui/styles/colors';
//config
import config from '../../configuration/configuration.js';

//scrollable list
import GridListExampleSimple from '../ScrollableList/scrollablelist.jsx';
import SplashScreen from '../SplashScreen/SplashScreen.jsx';

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
            this.state.splashScreen = true;
        }
        this.store.addChangeEventListener(this.storeChangeEmitted);

        //check if it's the first time we open the application
        this.store.checkCookies();
    }

    componentWillUnmount() {
        this.store.removeChangeEventListener(this.storeChangeEmitted);
    }

    storeChangeEmitted(event) {
        var that = this;
        /* Here you want to create a splash screen for your app that will send the user to the login
        * or registration page at the start of your application
        * */

        if (event.detail === 'log_user') {
            that.setState({
                splashScreen: false
            });
        } else {
            that.setState({
                splashScreen: true
            });
        }
    }

	handleClose() {
		this.setState({openDrawer: false});
	}

    leftButtonTapPress() {
        this.setState({openDrawer: true});
    }

    render () {
        var elem;

        if (config.showSplashScreen && this.state.splashScreen) {
            elem = (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <SplashScreen/>
                </MuiThemeProvider>
            )
        } else {
            elem = (
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <AppBar title="Snowball Hybrid App"
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
                        { this.props.children }
                    </MuiThemeProvider>

                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <DrawerUndockedExample open={this.state.openDrawer} handleClose={this.handleClose}/>
                    </MuiThemeProvider>
                </div>
            );
        }

        return (
            <div>
                {elem}
            </div>
        );
    }
}

export default Main;