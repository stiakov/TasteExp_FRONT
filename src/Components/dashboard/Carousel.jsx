import React from 'react';
import Card from './Card';

const Carousel = ({ commerces }) => (
  <div className="window ui cards">
    {
        commerces.map(({
          id,
          name,
          city,
          country,
          commerce_type,
        }) => <Card key={id} name={name} city={city} country={country.name} type={commerce_type.name} />)
      }
  </div>
);

export default Carousel;
