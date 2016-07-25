import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
	margin: '10px 0'
}
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {

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
				label="Ok"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose.bind(this)}
				/>,
		];

		return (
			<div style={style}>
				<RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title="Dialog With Date Picker"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					>
					Open a Date Picker dialog from within a dialog.
					<DatePicker hintText="Date Picker" />
				</Dialog>
			</div>
		);
	}
}