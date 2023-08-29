import { render } from 'react-dom';
import React, { ChangeEvent, CSSProperties, useRef, useState } from 'react';
import { Player, PlayerRef } from '@remotion/player';

import animation from './animation.json';
import Composition from './Composition';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: 10,
};

const App: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [animationData, setAnimationData] = useState<any>(animation);

  const updateText = (evt: ChangeEvent<HTMLInputElement>) => {
    const text = evt.target.value;
    const newData = { ...animationData };
    newData.assets[4].layers[1].t.d.k[0].s.t = text ? text : 'Demo Text';
    setAnimationData(newData);
  };

  return (
    <div style={styles}>
      <input placeholder="Test" onChange={updateText} />

      <Player
        ref={playerRef}
        component={Composition}
        compositionWidth={800}
        compositionHeight={450}
        controls
        durationInFrames={30 * 60}
        fps={60}
        inputProps={{ animationData }}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
