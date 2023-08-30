import {Composition, Sequence} from 'remotion';
import {Overlay} from './Overlay';
import {MyVideo} from './Video';

const MyComposition = () => {
	return (
	  <>
		<Sequence 
			from={0}
			durationInFrames={300}>
				<MyVideo/>
		</Sequence>
		<Sequence from={10} durationInFrames={30}>
			<Overlay />
		</Sequence>
	  </>
	);
  };

export const RemotionRoot: React.FC = () => {
 
	return (
		<div
			style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
			<>
				<Composition
					id="MyComposition"
					component={MyComposition}
					durationInFrames={180}
					fps={30}
					width={1920}
					height={1080}
				/>
			</>
		</div>
		
	);
};
