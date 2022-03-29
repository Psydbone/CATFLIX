import React from 'react';
import '../style.css';

export default function VideoList(props) {
  const data = [
    {id:0,imgSrc:"http://placekitten.com/g/400/200",description:"Sono l'anteprima di un video"},
    {id:1,imgSrc:"http://placekitten.com/g/500/400",description:"Sono l'anteprima di un video"},
    {id:2,imgSrc:"http://placekitten.com/g/600/300",description:"Sono l'anteprima di un video"},
    {id:3,imgSrc:"http://placekitten.com/g/600/200",description:"Sono l'anteprima di un video"},
    {id:4,imgSrc:"http://placekitten.com/g/300/700",description:"Sono l'anteprima di un video"},
    {id:5,imgSrc:"http://placekitten.com/g/300/200",description:"Sono l'anteprima di un video"},
    {id:6,imgSrc:"http://placekitten.com/g/200/100",description:"Sono l'anteprima di un video"},
  ]
 
  return (
    <>
      <h4>{props.title}</h4>
      <div className="scroll">
        <div className="thumbnail" >
          {data.map(elementoCorrente => <img src={elementoCorrente.imgSrc} onClick={() => props.videoClicked(elementoCorrente.id)}/>)}
        </div>
      </div>
    </>
  );
}
