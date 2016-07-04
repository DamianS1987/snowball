import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, Link, browserHistory } from 'react-router';

//theme components
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//colors
import {cyan500} from 'material-ui/styles/colors';

//scrollable list
import GridListExampleSimple from '../components/ScrollableList/scrollablelist.jsx';

//components
import About from '../components/About/About.jsx';
import Main from '../components/Main/Main.jsx';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
	palette: {
		textColor: cyan500,
	},
	appBar: {
		height: 50,
	},
});

class App_Router extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Main}>
					{/* add the routes here */}

					<Route path="/about" component={About}>
					</Route>
				</Route>

			</Router>
		);
	}
}

module.exports = App_Router;