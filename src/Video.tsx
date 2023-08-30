import {AbsoluteFill, Video} from 'remotion';

export const MyVideo = () => {
	return (
	  <AbsoluteFill>
		<Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
	  </AbsoluteFill>
	);
  };