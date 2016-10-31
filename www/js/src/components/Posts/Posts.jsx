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
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		height: window.innerHeight - 64 + 'px',
	},
	posts: {
		height: window.innerHeight - 64 + 'px',
		width: '100%',
		overflowY: 'auto',
	},
};

var cachedState = {
	data: []
};

class Posts extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		var that = this;

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

	render() {
		var elem;

		if (this.state.posts.length === 0) {
			elem = <p>Loading...</p>;
		} else {
			elem = <List posts={this.state.posts}/>;
		}

		return(
			<div data-lala style={styles.root}>
				<GridList
					cellHeight={200}
					style={styles.posts}
				    cols={1}
					>
					{elem}
				</GridList>
			</div>
		);
	}
}

export default Posts;