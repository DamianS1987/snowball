import React from 'react';
//components
import SimpleStepper from './SimpleStepper/SimpleStepper.jsx';
import VerticalStepper from './VerticalStepper/VerticalStepper.jsx';
import HorizontalNonLinearStepper from './HorizontalNonLinearStepper/HorizontalNonLinearStepper.jsx';
import Subheader from 'material-ui/Subheader';

const style = {
	height: innerHeight - 64,
	paddingBottom: 64,
	overflowY: 'scroll',
	overflowX: 'hidden',
	width: '100%',
};
const stepperStyle = {
	overflow: 'scroll',
	width: '100%',
	paddingBottom: 64
}

const Steppers = () => (
	<div style={style}>
		<Subheader>Simple Stepper example (horizontal scroll)</Subheader>
		<div style={stepperStyle}>
			<SimpleStepper></SimpleStepper>
		</div>

		<Subheader>Vertical Stepper example</Subheader>
		<VerticalStepper></VerticalStepper>

		<Subheader>Horizontal non lineader stepper example (horizontal scroll)</Subheader>
		<div style={stepperStyle}>
			<HorizontalNonLinearStepper></HorizontalNonLinearStepper>
		</div>
	</div>
);

export default Steppers;