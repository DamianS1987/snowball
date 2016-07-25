import React from 'react';
import SimpleDialog from './SimpleDialog/SimpleDialog.jsx';
import ModalDialog from './ModalDialog/ModalDialog.jsx';
import StyledDialog from './StyledDialog/StyledDialog.jsx';
import DialogWithDatePicker from './DialogWithDatePicker/DialogWithDatePicker.jsx';
import ScrollableDialog from './ScrollableDialog/ScrollableDialog.jsx';
import Alert from './Alert/Alert.jsx';

const style = {
	height: '1000px'
};

const Dialog = () => (
	<div style={style}>
		<SimpleDialog></SimpleDialog>
		<ModalDialog></ModalDialog>
		<StyledDialog></StyledDialog>
		<DialogWithDatePicker></DialogWithDatePicker>
		<ScrollableDialog></ScrollableDialog>
		<Alert></Alert>
	</div>
);


export default Dialog;