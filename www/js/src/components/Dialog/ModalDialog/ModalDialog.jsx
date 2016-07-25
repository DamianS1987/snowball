import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: '10px 0'
}
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogExampleModal extends React.Component {

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
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
			<FlatButton
				label="Submit"
				primary={true}
				disabled={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div style={style}>
				<RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title="Dialog With Actions"
					actions={actions}
					modal={true}
					open={this.state.open}
					>
					Only actions can close this dialog.
				</Dialog>
			</div>
		);
	}
}