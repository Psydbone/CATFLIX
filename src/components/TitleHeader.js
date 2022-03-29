import React from 'react';
import '../style.css';

export default function TitleHeader(props) {
  const visualizza = true;
  return (
    <div className="container">
      <div className="texts">
        {visualizza && <h1 className="title">{props.titles.title}</h1>}
        <p className="description">{props.titles.description}</p>
        <p className="notes">{props.titles.notes}</p>
      </div>
      <div id="ciccio" className="images">
        <img src="http://placekitten.com/g/600/200" />
      </div>
    </div>
  );
}
