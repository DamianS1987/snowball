import React, { PropTypes, Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {browserHistory} from 'react-router';

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
		author: 'John Snow',
	},
	{
		img: 'img/grid-list/burger-827309_640.jpg',
		title: 'Tasty burger 1',
		author: 'pashminu',
	},
	{
		img: 'img/grid-list/00-52-29-429_640.jpg',
		title: 'Breakfast',
		author: 'Lorem ipsum',
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
		author: 'DaDaDaDa',
	},
	{
		img: 'img/grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'John Lennon',
	},
	{
		img: 'img/grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'ABCD',
	},
	{
		img: 'img/grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'Baran Karki',
	},
	{
		img: 'img/grid-list/vegetables-790022_640.jpg',
		title: 'Vegetables',
		author: 'AilAAl111',
	},
	{
		img: 'img/grid-list/water-plant-821293_640.jpg',
		title: 'Water plant',
		author: 'BkrmadtyaKarki',
	},
];

class GridList2 extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {
			showGridList: true
		};

		//scope
		this.openContentSection = this.openContentSection.bind(this);
	}

	openContentSection() {
		console.log('open content', this);

		this.setState({
			showGridList: false
		});

		browserHistory.push('/#/gridlist2/myarticle');
	}

	render() {
		var componentToDisplay;

		if (this.state.showGridList) {
			componentToDisplay = (
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
							onTouchTap={this.openContentSection}
							>
							<img src={tile.img}/>
						</GridTile>
					))}
				</GridList>
			);
		} else {

			console.log(this.props);

			componentToDisplay = this.props.children;
		}

		return(
			<div style={styles.root}>
				{componentToDisplay}
			</div>
		);
	}
}

export default GridList2;