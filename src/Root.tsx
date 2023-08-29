import {Composition} from 'remotion';
import {Overlay} from './Overlay';
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

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<div style={buttonContainer}>
				<Button style={buttonLeft} variant="outlined">Undo</Button>
				<Button style={buttonRight} variant="outlined">Redo</Button>
			</div>
			
			<Composition
				id="Overlay"
				component={Overlay}
				durationInFrames={10}
				fps={30}
				width={1920}
				height={1080}
			/>
			
		</>
	);
};
