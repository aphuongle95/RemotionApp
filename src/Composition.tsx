import React, { CSSProperties, Fragment } from 'react';
import { Sequence, Video } from 'remotion';
import RemotionLottie from './RemotionLottie';

const style: CSSProperties = {
  width: 800,
  height: 450,
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '20px !important',
};

const Composition = (props: { animationData: any }) => {
  return (
    <Fragment>
      <Sequence from={0} durationInFrames={1800}>
        <Video
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          startFrom={0} // if video is 30fps, then it will start at 2s
          endAt={60 * 60} // if video is 30fps, then it will end at 4s
          disableRemotePlayback
        />
      </Sequence>
      <Sequence from={50} durationInFrames={1750}>
        <RemotionLottie
          animationData={props.animationData}
          style={style}
          speed={0.5}
        />
      </Sequence>
    </Fragment>
  );
};

export default Composition;
