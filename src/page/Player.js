import React from 'react';

import PlayBtn from '../icons/PlayBtn';
import BackIcon from '../icons/BackIcon';
import VolumeIcon from '../icons/VolumeIcon';
import '../style.css';

export default function Player() {
  return (
    <div className="player-container">
      <div className="top">
        <BackIcon className="backIcon" />
        <h1 className="player"> Player </h1>
        <VolumeIcon className="volumeIcon" />
      </div>
      <div className="bot">
        <PlayBtn className="playBtn" />
       
      </div>
    </div>
  );
}
