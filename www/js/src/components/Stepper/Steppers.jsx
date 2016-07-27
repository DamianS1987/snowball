import React from 'react';
//components
import SimpleStepper from './SimpleStepper/SimpleStepper.jsx';
import VerticalStepper from './VerticalStepper/VerticalStepper.jsx';
import HorizontalNonLinearStepper from './HorizontalNonLinearStepper/HorizontalNonLinearStepper.jsx';
import Subheader from 'material-ui/Subheader';

const style = {
	height: innerHeight - 64,
	overflow: 'scroll'
}

const Steppers = () => (
	<div style={style}>
		<Subheader>Simple Stepper example</Subheader>
		<SimpleStepper></SimpleStepper>

		<Subheader>Vertical Stepper example</Subheader>
		<VerticalStepper></VerticalStepper>

		<Subheader>Horizontal non lineader stepper example</Subheader>
		<HorizontalNonLinearStepper></HorizontalNonLinearStepper>
	</div>
);

export default Steppers;