import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
	marginRight: 24,
};

import {
	blue300,
	indigo900,
	orange200,
	deepOrange300,
	pink400,
	purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarExampleSimple = () => (
	<div>
	<List>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar src="img/avatar/avatarOne.png" />
      }
			>
			Image Avatar
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar
          src="img/avatar/avatarTwo.png"
          size={30}
          style={style}
        />
      }
			>
			Image Avatar with custom size
		</ListItem>
		<ListItem
			leftAvatar={
        <Avatar icon={<FontIcon className="muidocs-icon-action-home" />} />
      }
			>
			FontIcon Avatar
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar
          icon={<FontIcon className="muidocs-icon-action-home" />}
          size={30}
          style={style}
        />
      }
			>
			FontIcon Avatar with custom colors and size dfdf
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar icon={<FileFolder />} />
      }
			>
			SvgIcon Avatar
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar
          icon={<FileFolder />}
          color={orange200}
          backgroundColor={pink400}
          size={30}
          style={style}
        />
      }
			>
			SvgIcon Avatar with custom colors and size
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={<Avatar>A</Avatar>}
			>
			Letter Avatar
		</ListItem>
		<ListItem
			disabled={true}
			leftAvatar={
        <Avatar
          color={deepOrange300}
          backgroundColor={purple500}
          size={30}
          style={style}
        >
          A
        </Avatar>
      }
			>
			Letter Avatar with custom colors and size
		</ListItem>
	</List>
	</div>
);

export default AvatarExampleSimple;