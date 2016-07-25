import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogExampleAlert extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
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
				label="Discard"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div>
				<RaisedButton label="Alert" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					>
					Discard draft?
				</Dialog>
			</div>
		);
	}
}