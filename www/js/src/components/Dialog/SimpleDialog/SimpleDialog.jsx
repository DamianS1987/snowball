import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: '10px 0'
}
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {

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
				keyboardFocused={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div style={style}>
				<RaisedButton label="Dialog" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title="Dialog With Actions"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					>
					The actions in this window were passed in as an array of React objects.
				</Dialog>
			</div>
		);
	}
}