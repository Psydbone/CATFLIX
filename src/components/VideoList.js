import React from 'react';
import '../style.css';

export default function Home(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <div className="scroll">
        <div className="thumbnail">
          <img src="http://placekitten.com/g/400/200" />
          <img src="http://placekitten.com/g/500/400" />
          <img src="http://placekitten.com/g/600/300" />
          <img src="http://placekitten.com/g/600/200" />
          <img src="http://placekitten.com/g/300/700" />
          <img src="http://placekitten.com/g/300/200" />
          <img src="http://placekitten.com/g/200/100" />
        </div>
      </div>
    </>
  );
}
