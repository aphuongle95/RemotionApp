import React, { CSSProperties } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { continueRender, delayRender, useCurrentFrame } from 'remotion';

const getNextFrame = (
  currentFrame: number,
  totalFrames: number,
  loop?: boolean
) => {
  return !loop
    ? Math.min(currentFrame, totalFrames)
    : currentFrame % totalFrames;
};

// Simple and limited interface to start with
interface RemotionLottieProps {
  animationData?: any;
  className?: string;
  loop?: boolean;
  path?: string;
  speed?: number;
  style?: CSSProperties;
}

const RemotionLottie = ({
  animationData,
  className,
  loop,
  path,
  speed = 1,
  style,
}: RemotionLottieProps) => {
  const animationRef = React.useRef<AnimationItem>();
  const lastFrameRef = React.useRef<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [handle] = React.useState(delayRender);
  const frame = useCurrentFrame();

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      autoplay: false,
      animationData,
      path,
    });

    if (lastFrameRef.current) {
      animationRef.current.goToAndStop(lastFrameRef.current, true);
    }

    const { current: animation } = animationRef;
    const onComplete = () => {
      animation.setSpeed(speed);
      continueRender(handle);
    };

    animation.addEventListener('DOMLoaded', onComplete);

    return () => {
      lastFrameRef.current = animation.currentFrame;
      animation.removeEventListener('DOMLoaded', onComplete);
      animation.destroy();
    };
  }, [animationData, handle, path, speed]);

  React.useEffect(() => {
    if (!animationRef.current) {
      return;
    }

    const { totalFrames } = animationRef.current;
    const expectedFrame = frame * speed;
    // Switch the last param to `true` to loop it
    const segment = getNextFrame(expectedFrame, totalFrames, loop);

    animationRef.current.goToAndStop(segment, true);
  }, [frame, loop, speed]);

  return <div ref={containerRef} className={className} style={style} />;
};

export default RemotionLottie;
