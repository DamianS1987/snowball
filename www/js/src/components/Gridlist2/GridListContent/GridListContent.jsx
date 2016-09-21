import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
	root: {
		width: '100%',
		height: innerHeight - 64,
		overflow: 'scroll'
	},
	paper: {
		width: '100%',
		margin: 'auto',
		padding: '1%'
	},
	img: {
		width: '100%'
	},
	h1: {
		textAlign: 'center'
	}
};

class GridListContent extends React.Component {
	constructor(props) {
		super(props);
		//set state
		this.state = {};
	}

	render() {
		return(
			<div style={styles.root}>
				<Paper style={styles.paper}>
					<h1 style={styles.h1}>{this.props.params.articleName}</h1>
					<img style={styles.img} src="../img/grid-list/camera-813814_640.jpg"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi ducimus eaque ex excepturi explicabo fuga hic id illum inventore laudantium maiores maxime nemo omnis quaerat quam quidem rerum, sequi, suscipit tempora temporibus tenetur velit veniam voluptas voluptates. Accusamus aut eum fugit inventore laboriosam optio porro quos repudiandae tenetur vel. Architecto autem cumque cupiditate eaque exercitationem nobis! Accusantium architecto aspernatur atque autem debitis dolore expedita, facilis iusto, nisi odit porro quaerat, reiciendis sed sequi voluptate. Dolorum fuga in minus necessitatibus placeat possimus voluptas. A alias asperiores delectus, hic incidunt neque nihil nisi nobis numquam, quo reprehenderit saepe sapiente tenetur voluptates.</p>

					<iframe src="https://player.vimeo.com/video/180014671" width={innerWidth - innerWidth*2/100} frameBorder="0" allowFullScreen></iframe>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi ducimus eaque ex excepturi explicabo fuga hic id illum inventore laudantium maiores maxime nemo omnis quaerat quam quidem rerum, sequi, suscipit tempora temporibus tenetur velit veniam voluptas voluptates. Accusamus aut eum fugit inventore laboriosam optio porro quos repudiandae tenetur vel. Architecto autem cumque cupiditate eaque exercitationem nobis! Accusantium architecto aspernatur atque autem debitis dolore expedita, facilis iusto, nisi odit porro quaerat, reiciendis sed sequi voluptate. Dolorum fuga in minus necessitatibus placeat possimus voluptas. A alias asperiores delectus, hic incidunt neque nihil nisi nobis numquam, quo reprehenderit saepe sapiente tenetur voluptates.</p>
				</Paper>
			</div>
		);
	}
}

export default GridListContent;