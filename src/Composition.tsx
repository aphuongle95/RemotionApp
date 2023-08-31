import {Sequence} from 'remotion';
import {Overlay} from './Overlay';
import {MyVideo} from './Video';

type Props = {
	handleTextUpdate: Function
}

export const MyComposition: React.FC<Props> = ({handleTextUpdate}) => {
	return (
	  <>
		<Sequence 
			durationInFrames={300}>
				<MyVideo/>
		</Sequence>
		<Sequence from={10} durationInFrames={300}>
			<Overlay handleTextUpdate={handleTextUpdate}></Overlay>
		</Sequence>
	  </>
	);
  };