import React from 'react';
import citric from '../../images/motor.jpeg';

const Card = ({ name, country, city, type }) => (
  <div className="ui card cardex">
    <img className="card-image" src={citric} alt="snapshot" />

    <div className="content">
      <div className="header">{name}
        <div className="meta type-type">{type}</div>
      </div>
      <div className="description">
        {`${city} / ${country}`}
      </div>
    </div>
  </div>
);

export default Card;
