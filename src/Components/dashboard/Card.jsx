import React from 'react';
import citric from '../../images/motor.jpeg';

const Card = ({ name, description, email }) => {
  return (

    <div className="ui card cardex">
      <img className="card-image" src={citric} alt="snapshot" />

      <div className="extra content">
        <div className="header">{name}</div>
        <div className="description">
          {description}
        </div>
        <div className="meta">{email}</div>
      </div>

    </div>
  );
};

export default Card;
