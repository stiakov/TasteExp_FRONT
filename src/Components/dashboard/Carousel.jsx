import React from 'react';
import Card from './Card';

const Carousel = ({ commerces }) => (
  <div className="window ui cards">
    {
        commerces.map(item => (
          <Card
            key={item.id}
            id={item.id}
            commId={item.commerce.id}
            name={item.commerce.name}
            city={item.commerce.city}
            country={item.commerce.country.name}
            type={item.commerce.commerce_type.name}
            photos={item.commerce.photos}
          />
        ))
      }
  </div>
);

export default Carousel;
