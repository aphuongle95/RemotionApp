import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import Draggable from "react-draggable";
import { Input } from '@mui/material';

const {fontFamily} = loadFont();

const text: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 40,
	color: '#4290F5',
};


export const Overlay: React.FC = () => {

	const draggableContainer: React.CSSProperties = {
		backgroundColor: 'white',
		borderRadius: 25,
		right: 200,
		top: 100,
		padding: 40,
		width: 500,
		height: 100,
		alignSelf: 'center',
		position: 'relative'
	}
	return (
			<AbsoluteFill>
				<Draggable>
					<div style={draggableContainer}>
					<Input style={text} defaultValue="Move me or Drag me" />
					</div>
				</Draggable>
			</AbsoluteFill>

	);
};
