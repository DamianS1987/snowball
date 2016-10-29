import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import List from './List/List.jsx';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';
import $ from 'jquery';
//import configuration
import config from '../../configuration/configuration.js';

const styles = {
	root: {},
	gridList: {
		height: window.innerHeight - 64 + 'px',
		width: '100%',
		overflowY: 'auto',
	},
};

var cachedState = {
	data: []
}

class Posts extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {
			posts: []
		};
	}

	componentWillMount() {
		var that = this;

		console.log('data: ', this.state.posts, cachedState.data);

		//use cached data if available
		if (cachedState.data.length > 0) {
			this.setState({posts: cachedState.data});
			return;
		}

		//if no cached data call for data
		$.ajax({
			url: config.wp_json_url,
			dataType: 'json',
			success: function(data) {
				//update state for children update
				that.setState({posts: data});
				//cache data
				cachedState.data = data;
			},
			error: function(er) {
				console.log('Posts.jsx ajax error: ', er);
			}
		});
	}

	componentWillUnmount() {}

	render() {
		return(
			<GridList
				cellHeight={200}
				style={styles.gridList}
				>
				<List posts={this.state.posts}/>
			</GridList>
		);
	}
}

export default Posts;