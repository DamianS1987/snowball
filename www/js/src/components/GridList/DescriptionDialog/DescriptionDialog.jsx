import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: '10px 0'
}

class DescriptionDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	handleOpen() {
		this.setState({open: true});
	};

	handleClose() {
		this.setState({open: false});
	};

	render() {
		const actions = [
			<FlatButton
				label="OK"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div style={style}>
				<RaisedButton label="View Description" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title="Grid list with smooth scrolling"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					>
					This view should introduce long list of grid elements. As soon as you start scrolling you should notice that inspite of large number
					of elements on the page the scroll is still smooth.
				</Dialog>
			</div>
		);
	}
}

export default DescriptionDialog;