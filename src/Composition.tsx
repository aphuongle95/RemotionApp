import {Sequence} from 'remotion';
import {Overlay} from './Overlay';
import {MyVideo} from './Video';

export const MyComposition = () => {
	return (
	  <>
		<Sequence 
			durationInFrames={300}>
				<MyVideo/>
		</Sequence>
		<Sequence from={10} durationInFrames={300}>
			<Overlay />
		</Sequence>
	  </>
	);
  };