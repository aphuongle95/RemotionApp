import {
	AbsoluteFill
} from 'remotion';
import React, { memo, useMemo } from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import Draggable, { ControlPosition } from "react-draggable";
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import useUndoRedo from './useUndoRedo';

// declare styles
const buttonContainer: React.CSSProperties = {
	flexDirection: 'row',
	alignSelf: 'center',
	position: 'relative'
}

const button: React.CSSProperties = {
	color: 'black',
	background: 'white',
	width: 100,
	margin: 10,
	fontSize: 15,
	fontStyle: 'bold'
}

const draggableContainer: React.CSSProperties = {
	backgroundColor: 'white',
	borderRadius: 25,
	padding: 40,
	width: 500,
	height: 100,
	alignSelf: 'center',
	position: 'relative'
}

const {fontFamily} = loadFont();
const stateStyle: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 40,
	color: '#4290F5',
};


type Props = {
	pauseVideo: Function
}


const Overlay: React.FC<Props> = ({pauseVideo}) => {
	
	interface InteractiveText {
		T: string;
		X: number;
		Y: number;
	}

	const defaultText: InteractiveText = {
		T: "Change me or Drag me",
		X: 200,
		Y: 100
	};

	localStorage.clear();
	const savedState = localStorage.getItem('text-state');
	const initText = savedState != null ? JSON.parse(savedState) : defaultText;
	const saveStatetoLocalStorage = (newState: InteractiveText) => localStorage.setItem('text-state', JSON.stringify(newState))

	const {state, undo, redo, updatePresent} = useUndoRedo(()=>{return initText}, saveStatetoLocalStorage);

	let startX = 0
	let startY = 0


	const position: ControlPosition = useMemo( () => {
		return {x: state.X, y: state.Y}
	}, [state.X, state.Y])

	const text: string = useMemo( () => {
		return state.T
	}, [state.T])

	return (
			<AbsoluteFill>
				<div style={buttonContainer}>
					<Button onClick={()=>{undo(); pauseVideo()}} style={button} variant="outlined">Undo</Button>
					<Button onClick={()=>{redo(); pauseVideo()}} style={button} variant="outlined">Redo</Button>
				</div>
				<Draggable onStart={(e, data) => {
						startX = data.x
						startY = data.y
						pauseVideo() 
					}} 
					onStop={(e, data) => {			
						let deltaX = data.x - startX
						let deltaY = data.y - startY
						updatePresent({
							T: state.T,
							X: state.X + deltaX, 
							Y: state.Y + deltaY, 
						})
						
				}} position={position}>
					<div style={draggableContainer}>
					<Input style={stateStyle} value={text} onChange={(event) => {
						updatePresent({
							T: event.target.value,
							X: state.X,
							Y: state.Y
						})
						pauseVideo()
					}}/>
					</div>
				</Draggable>
			</AbsoluteFill>
	);
};
export default memo(Overlay)