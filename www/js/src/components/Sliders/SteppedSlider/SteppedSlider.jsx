import React from 'react';
import Slider from 'material-ui/Slider';

const style = {
	width: '90%',
	margin: 'auto'
}

/**
 * By default, the slider is continuous. The `step` property causes the slider to move in discrete increments.
 */
const SliderExampleStep = () => (
	<Slider step={0.10} value={.5} style={style}/>
);

export default SliderExampleStep;