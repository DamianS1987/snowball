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

    storeChangeEmitted(cookiesExist) {
        var that = this;
        /* Here you want to create a splash screen for your app that will send the user to the login
        * or registration page at the start of your application
        * */

        that.setState({
            splashScreen: true
        });

        setTimeout(function() {
            //browserHistory.push('/#/forms/autocompleteexample?_k=o8wqnl');
        }, 4000);
    }

    componentWillUnmount() {
        this.store.removeChangeEventListener(this.storeChangeEmitted);
    }

	handleClose() {
		this.setState({openDrawer: false});
	}

    leftButtonTapPress() {
        this.setState({openDrawer: true});
    }

    render () {

        if (this.state.splashScreen) {

            return (
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <SplashScreen/>
                    </MuiThemeProvider>
                </div>
            )
        } else {

            return (
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
                        <DrawerUndockedExample open={this.state.openDrawer} handleClose={this.handleClose}/>
                    </MuiThemeProvider>

                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        { this.props.children }
                    </MuiThemeProvider>
                </div>
            );
        }
    }
}

export default Main;