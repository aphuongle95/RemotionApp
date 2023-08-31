import {Sequence} from 'remotion';
import {MyVideo} from './Video';
import Overlay from './Overlay';

type Props = {
	pauseVideo: Function
}

export const MyComposition: React.FC<Props> = ({pauseVideo}) => {
	return (
	  <>
		<Sequence 
			durationInFrames={300}>
				<MyVideo/>
		</Sequence>
		<Sequence durationInFrames={300}>
			<Overlay pauseVideo={pauseVideo}></Overlay>
		</Sequence>
	  </>
	);
  };