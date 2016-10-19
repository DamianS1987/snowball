import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		height: window.innerHeight - 64 + 'px',
	},
	gridList: {
		width: '100%',
		overflowY: 'auto',
	},
};

//get data from the server
const tilesData = [
	{
		img: 'img/grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'John Snow',
	}
];

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

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return(
			<div style={styles.root}>
				<GridList
					cellHeight={200}
					style={styles.gridList}
					>
					{tilesData.map((tile) => (
						<GridTile
							key={tile.img + tile.author + tile.title}
							title={tile.title}
							subtitle={<span>by <b>{tile.author}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
							cols={2}
							rows={1}
							onTouchTap={this.openContentSection.bind(this, tile)}
							>
							<img src={tile.img}/>
						</GridTile>
					))}
				</GridList>
			</div>
		);
	}
}

export default Posts;