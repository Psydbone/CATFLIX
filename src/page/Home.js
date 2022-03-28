import React from 'react';
import '../style.css';

import TitleHeader from '../components/TitleHeader';
import VideoList from '../components/VideoList';

export default function Home() {

  const data={};

  return (
    <>
      <TitleHeader />
      <VideoList />
      <VideoList />
      <VideoList />
      <VideoList />
    </>
  );
}
