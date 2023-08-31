import {Player, PlayerRef} from '@remotion/player';
import {MyComposition} from './Composition'
// @ts-ignore
import { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
	
	const playerRef = useRef<PlayerRef>(null);

	// pause on text update (edit or move)
	const handleTextUpdate = () => {
		if (playerRef.current) {
			playerRef.current.pause()
		}
	}
	
	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<Player
				ref={playerRef}
				controls
				clickToPlay={false}
				style={{ width: "100%", height: "100%" }}
				component={MyComposition}
				durationInFrames={180}
				fps={30}
				compositionWidth={1920}
				compositionHeight={1080}
				inputProps={{
					"handleTextUpdate": handleTextUpdate
				}}
			/>
		</div>
		
	);
};

export default App