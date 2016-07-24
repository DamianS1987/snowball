import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Done from 'material-ui/svg-icons/action/done';
import ActionInfo from 'material-ui/svg-icons/action/info';

const style = {
	width: '90%',
	margin: '5% 5%',
	textAlign: 'left',
	display: 'block',
};
const textStyle = {
	padding: '2% 5% 2%',
	fontSize: '1rem'
}
const wrapperStyle = {
	overflow: 'scroll',
	position: 'relative',
	height: innerHeight
}

export default class AutoCompleteExampleSimple extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			dataSource: [],
		};
	}

	handleUpdateInput(value) {
		this.setState({
			dataSource: [
				value,
				value + value,
				value + value + value,
			],
		});
	};

	render() {
		return (
			<div style={wrapperStyle}>
				<Paper style={style} zDepth={2}>
					<Subheader>Short briefing for the below Simple Example</Subheader>
					<p style={textStyle}>In this page we are using the following components:</p>
					<List>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Paper
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Subheader
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							List
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Form AutoComplete
						</ListItem>
					</List>
					<p style={textStyle}>When you type text to the input element you should see tooltip with copy of the text.</p>
				</Paper>
				<AutoComplete
					hintText="Type anything"
					//this is the data that will be displayed
					dataSource={this.state.dataSource}
					//update the state and the data will display automatically
					onUpdateInput={this.handleUpdateInput.bind(this)}
					/>
				<AutoComplete
					hintText="Type anything"
					dataSource={this.state.dataSource}
					onUpdateInput={this.handleUpdateInput.bind(this)}
					floatingLabelText="Full width"
					fullWidth={true}
					/>

				<Paper style={style} zDepth={2}>
					<Subheader>Short briefing for the below Simple Example</Subheader>
					<p style={textStyle}>In this page we are using the following components:</p>
					<List>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Paper
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Subheader
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							List
						</ListItem>
						<ListItem
							leftAvatar={<Avatar icon={<Done />} />}
							rightIcon={<ActionInfo />}
							disabled={true}>
							Form AutoComplete
						</ListItem>
					</List>
					<p style={textStyle}>When you type text to the input element you should see tooltip with copy of the text.</p>
				</Paper>
			</div>
		);
	}
}