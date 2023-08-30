import {
	AbsoluteFill, continueRender, delayRender
} from 'remotion';
import React, { useMemo, useState } from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import Draggable, { ControlPosition } from "react-draggable";
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import useUndoRedo from './useUndoRedo';


const buttonContainer: React.CSSProperties = {
	flexDirection: 'row',
	alignSelf: 'center',
	position: 'relative'
}

const buttonLeft: React.CSSProperties = {
	color: 'orange',
	background: 'white'
}

const buttonRight: React.CSSProperties = {
	color: 'purple',
	background: 'white'
}

const {fontFamily} = loadFont();

const stateStyle: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 40,
	color: '#4290F5',
};


export const Overlay: React.FC = () => {

	
	
	interface InteractiveText {
		T: string;
		X: number;
		Y: number;
	}

	const getText = (): InteractiveText => {
		return {
			T: "Change me or Drag me",
			X: 200,
			Y: 100
		}
	};

	const {state, undo, redo, updatePresent} = useUndoRedo(getText());

	const draggableContainer: React.CSSProperties = {
			backgroundColor: 'white',
			borderRadius: 25,
			padding: 40,
			width: 500,
			height: 100,
			alignSelf: 'center',
			position: 'relative'
		}

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
					<Button onClick={()=>undo()} style={buttonLeft} variant="outlined">Undo</Button>
					<Button onClick={()=>redo()} style={buttonRight} variant="outlined">Redo</Button>
				</div>
				<Draggable onStart={(e, data) => {
						// console.log("start", state.X, state.Y)
						// console.log("start", data.x, data.y)
						startX = data.x
						startY = data.y
					}} 
					onStop={(e, data) => {			
						// console.log("stop", state.X, state.Y)
						// console.log("stop", data.x, data.y)
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
					}}/>
					</div>
				</Draggable>
			</AbsoluteFill>
	);
};
