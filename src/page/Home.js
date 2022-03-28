import React from 'react';
import '../style.css';

import TitleHeader from '../components/TitleHeader';
import VideoList from '../components/VideoList';

export default function Home() {
  const data = {
    titleData: {
      title: "House of Cats",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      notes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    lists: ['Continua a guardare','Novità','Commedia'],
  };

  console.log();
    data.lists.map((elementocorrente)=> {console.log(elementocorrente)});
 

  return (
    <>
      <TitleHeader titles={data.titleData}/>
      {data.lists.map((elementocorrente)=> {return <VideoList title={elementocorrente}/>})};
    </>
  );
}
