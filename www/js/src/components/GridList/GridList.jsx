import React, { PropTypes, Component } from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//config
import config from '../../configuration/configuration.js';

//dialog with description
import DescriptionDialog from './DescriptionDialog/DescriptionDialog.jsx';

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
		img: config.img_url() + 'grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'John Snow www',
	},
	{
		img: config.img_url() + 'grid-list/burger-827309_640.jpg',
		title: 'Tasty burger 1',
		author: 'pashminu',
	},
	{
		img: config.img_url() + 'grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'Lorem ipsum',
	},
	{
		img: config.img_url() + 'grid-list/burger-827309_640.jpg',
		title: 'Tasty burger',
		author: 'pashminu',
	},
	{
		img: config.img_url() + 'grid-list/camera-813814_640.jpg',
		title: 'Camera',
		author: 'Danson67',
	},
	{
		img: config.img_url() + 'grid-list/morning-819362_640.jpg',
		title: 'Morning',
		author: 'fancycrave1',
	},
	{
		img: config.img_url() + 'grid-list/hats-829509_640.jpg',
		title: 'Hats',
		author: 'Hans',
	},
	{
		img: config.img_url() + 'grid-list/honey-823614_640.jpg',
		title: 'Honey',
		author: 'fancycravel',
	},
	{
		img: config.img_url() + 'grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'DaDaDaDa',
	},
	{
		img: config.img_url() + 'grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'John Lennon',
	},
	{
		img: config.img_url() + 'grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'ABCD',
	},
	{
		img: config.img_url() + 'grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'Baran Karki',
	},
	{
		img: config.img_url() + 'grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'AilAAl111',
	},
	{
		img: config.img_url() + 'grid-list/water-plant-821293_640.jpg',
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
		return(
			<div style={styles.root}>
				<GridList
					cellHeight={200}
					style={styles.gridList}
					>
					<Subheader>Grid List Example <DescriptionDialog></DescriptionDialog></Subheader>

					{tilesData.map((tile) => (
						<GridTile
							key={tile.img + tile.author + tile.title}
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

export default GridListExampleSimple;