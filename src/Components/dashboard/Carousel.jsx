import React from 'react';
import Card from './Card';

const Carousel = ({ commerces }) => {
  return (
    <div className="window ui cards">
      {
        commerces.map(({
          id,
          name,
          email,
          description,
        }) => <Card key={id} name={name} email={email} description={description} />)
      }
    </div>
  );
};

export default Carousel;
