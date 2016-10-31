import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';
import _ from 'underscore';

const styles = {
	root: {
		width: '100%'
	},
	tile: {
		position: 'relative'
	}
};

class Posts extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {};

		//scope
		this.openContentSection = this.openContentSection.bind(this);
	}

	openContentSection(tile) {
		hashHistory.push('/gridlist2/' + tile.title);
	}

	render(props) {

		return(
			<div style={styles.root}>
				{this.props.posts.map(function(data) {

					return (
						<GridTile
							key={data.author + data.title.rendered}
							title={data.title.rendered}
							subtitle={<span>by <b>{data.date}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
							cols={1}
							rows={1}
							style={styles.tile}
							>
							<img
								src={data.better_featured_image && data.better_featured_image.media_details.sizes.medium.source_url} />
						</GridTile>
					);
					}
				)
				}
			</div>
		);
	}
}

export default Posts;