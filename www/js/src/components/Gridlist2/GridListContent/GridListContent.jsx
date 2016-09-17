import React from 'react';

const styles = {
	root: {
		width: '100%',
		height: '500px'
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
				<p>content page</p>
			</div>
		);
	}
}

export default GridListContent;