import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { Link, Router, Route, hashHistory } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const tilesData = [
	{
		img: 'img/grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'jill111',
	},
	{
		img: 'img/grid-list/burger-827309_640.jpg',
		title: 'Tasty burger',
		author: 'pashminu',
	},
	{
		img: 'img/grid-list/camera-813814_640.jpg',
		title: 'Camera',
		author: 'Danson67',
	},
	{
		img: 'img/grid-list/morning-819362_640.jpg',
		title: 'Morning',
		author: 'fancycrave1',
	},
	{
		img: 'img/grid-list/hats-829509_640.jpg',
		title: 'Hats',
		author: 'Hans',
	},
	{
		img: 'img/grid-list/honey-823614_640.jpg',
		title: 'Honey',
		author: 'fancycravel',
	},
	{
		img: 'img/grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'jill111',
	},
	{
		img: 'img/grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'BkrmadtyaKarki',
	},
];

class GridListExampleSimple extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {}
	}

	render() {

		console.log('scroll')

		return(
			<div style={styles.root}>
				<GridList
					cellHeight={200}
					style={styles.gridList}
					>
					<Subheader>December</Subheader>
					{tilesData.map((tile) => (
						<GridTile
							key={tile.img}
							title={tile.title}
							subtitle={<span>by <b>{tile.author}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
							>
							<img src={tile.img} />
						</GridTile>
					))}
				</GridList>
			</div>
		);
	}
}

//const GridListExampleSimple = () => (
//
//);

export default GridListExampleSimple;