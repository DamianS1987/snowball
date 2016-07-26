import React from 'react';
import Slider from 'material-ui/Slider';

const style = {
	width: '90%',
	margin: 'auto'
};
/**
 * The `defaultValue` property sets the initial position of the slider. The slider
 * appearance changes when not at the starting position.
 */
const SliderExampleSimple = () => (
	<div style={style}>
		<Slider />
		<Slider defaultValue={0.5} />
		<Slider defaultValue={1} />
	</div>
);

export default SliderExampleSimple;