import React from 'react';
import '../style.css';

export default function Home() {
  return (
    <div className="container">
      <div className="texts">
        <h1 className="title">House of Cats</h1>
        <p className="description">
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della
          tipografia e della stampa. Lorem Ipsum è considerato il testo
          segnaposto standard sin dal sedicesimo secolo, quando un anonimo
          tipografo prese una cassetta di caratteri e li assemblò per preparare
          un testo campione.
        </p>
        <p className="notes">
          Il brano standard del Lorem Ipsum usato sin dal sedicesimo secolo è
          riprodotto qui di seguito per coloro che fossero interessati. Anche le
          sezioni 1.10.32 e 1.10.33 del "de Finibus Bonorum et Malorum" di
          Cicerone sono riprodotte nella loro forma originale, accompagnate
          dalla traduzione inglese del 1914 di H. Rackham.
        </p>
      </div>
      <div id="ciccio" className="images">
        <img src="http://placekitten.com/g/600/200" />
      </div>
    </div>
  );
}