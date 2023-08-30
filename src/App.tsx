import {Player} from '@remotion/player';
import {MyComposition} from './Composition'

const App: React.FC = () => {
 
	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<Player
				controls
				clickToPlay={false}
				style={{ width: "100%", height: "100%" }}
				component={MyComposition}
				durationInFrames={180}
				fps={30}
				compositionWidth={1920}
				compositionHeight={1080}
			/>
		</div>
		
	);
};

export default App