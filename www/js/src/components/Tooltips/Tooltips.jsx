import React from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
//touch
import ActionGrade from 'material-ui/svg-icons/action/grade';

const style = {
	height: '1000px',
	marginTop: '34px'
}

const IconButtonExampleTooltip = () => (
	<div style={style}>
		<Subheader>Simple Tooltip</Subheader>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
			tooltipPosition="bottom-right"
			/>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
			tooltipPosition="bottom-center"
			/>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
			tooltipPosition="bottom-left"
			/>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="top-right"
			tooltipPosition="top-right"
			/>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="top-center"
			tooltipPosition="top-center"
			/>
		<IconButton
			iconClassName="muidocs-icon-custom-github" tooltip="top-left"
			tooltipPosition="top-left"
			/>
		<Divider/>
		<Subheader>Tooltip touch true to increase tooltip size</Subheader>
		<IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
			<ActionGrade />
		</IconButton>
		<IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
			<ActionGrade />
		</IconButton>
		<IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
			<ActionGrade />
		</IconButton>
		<IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
			<ActionGrade />
		</IconButton>
		<IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
			<ActionGrade />
		</IconButton>
		<IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
			<ActionGrade />
		</IconButton>
		<Divider/>

		<Subheader>Tooltip disabled & icon specified using 'iconClassName'</Subheader>
		<IconButton iconClassName="muidocs-icon-custom-github" />
		<IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
	</div>
);

export default IconButtonExampleTooltip;