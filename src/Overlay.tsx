import {
	AbsoluteFill
} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import Draggable from "react-draggable";
import { Input } from '@mui/material';
import useUndoableState from "@jeremyling/react-use-undoable-state";
import { Button } from '@mui/material';

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

const textStyle: React.CSSProperties = {
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

	const init = {text: "Change my Text" };

	const {
		state: doc,
		setState: setDoc,
		resetState: resetDoc,
		index: docStateIndex,
		lastIndex: docStateLastIndex,
		goBack: undoDoc,
		goForward: redoDoc,
	  } = useUndoableState(
		init,
		500 
	  );
	  const canUndo = docStateIndex > 0;
	  const canRedo = docStateIndex < docStateLastIndex;

	return (
			<AbsoluteFill>
				<div style={buttonContainer}>
					<Button onClick={()=>undoDoc()} disabled={!canUndo} style={buttonLeft} variant="outlined">Undo</Button>
					<Button onClick={()=>redoDoc()} disabled={!canRedo} style={buttonRight} variant="outlined">Redo</Button>
				</div>
				<Draggable>
					<div style={draggableContainer}>
					<Input style={textStyle} value={doc.text} onChange={(event) => setDoc({ text: event.target.value })}/>
					</div>
				</Draggable>
			</AbsoluteFill>
	);
};
