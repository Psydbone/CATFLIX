import React from 'react';

import PlayBtn from '../icons/PlayBtn';
import BackIcon from '../icons/BackIcon';
import VolumeIcon from '../icons/VolumeIcon';
import '../style.css';

export default function Player() {
  return (
    <div className="player-container">
      <h1 className="player"> Player </h1>
      <PlayBtn className="playBtn" />
      <BackIcon className="backIcon" />
      <VolumeIcon className="volumeIcon" />
    </div>
  );
}
