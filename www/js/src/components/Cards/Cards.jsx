import React from 'react';
import BasicCard from './BasicCard/BasicCard.jsx';
import ExpandableCard from './ExpandableCard/ExpandableCard.jsx';
import ControlledExpandableCard from './ControlledExpandableCard/ControlledExpandableCard.jsx';
import Divider from 'material-ui/Divider';

const style = {
	height: innerHeight-64,
	overflow: 'scroll'
};
const dividerStyle = {
	margin: '50px 0 50px'
}

const Cards = () => (
	<div>
		<BasicCard></BasicCard>
		<Divider />
		<ExpandableCard></ExpandableCard>
		<Divider />
		<ControlledExpandableCard></ControlledExpandableCard>
	</div>
);

export default Cards;