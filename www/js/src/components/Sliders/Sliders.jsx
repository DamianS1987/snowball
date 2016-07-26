import React from 'react';
//components
import SimpleSlider from './SimpleSlider/SimpleSlider.jsx';
import Subheader from 'material-ui/Subheader';
import SteppedSlider from './SteppedSlider/SteppedSlider.jsx';
import AlternativeAxisSlider from './AlternativeAxisSlider/AlternativeAxisSlider.jsx';

const style = {
	height: '1500px'
}

const Sliders = () => (
	<div style={style}>
		<Subheader>Simple Slider example</Subheader>
		<SimpleSlider></SimpleSlider>
		<Subheader>Stepped Slider example</Subheader>
		<SteppedSlider></SteppedSlider>
		<Subheader>Alternative Axis Slider</Subheader>
		<AlternativeAxisSlider></AlternativeAxisSlider>
	</div>
);

export default Sliders;