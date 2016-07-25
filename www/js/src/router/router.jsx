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
import Home from '../components/Home/Home.jsx';
import GridList from '../components/GridList/GridList.jsx';
import AvatarExampleSimple from '../components/Avatar/Avatar.jsx';
import AutoCompleteExampleSimple from '../components/Forms/AutoComplete/AutoCompleteExampleSimple.jsx';
import Badge from '../components/Badge/Badge.jsx';
import Tooltips from '../components/Tooltips/Tooltips.jsx';
import Cards from '../components/Cards/Cards.jsx';
import Chip from '../components/Chip/Chip.jsx';

//Main component
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

					<Route path="/about" component={About}></Route>
					<Route path="/home" component={Home}></Route>
					<Route path="/gridlist" component={GridList}></Route>
					<Route path="/avatar" component={AvatarExampleSimple}></Route>
					<Route path="/forms/autocompleteexample" component={AutoCompleteExampleSimple}></Route>
					<Route path="/badge" component={Badge}></Route>
					<Route path="/tooltips" component={Tooltips}></Route>
					<Route path="/cards" component={Cards}></Route>
					<Route path="/chip" component={Chip}></Route>

				</Route>

			</Router>
		);
	}
}

module.exports = App_Router;