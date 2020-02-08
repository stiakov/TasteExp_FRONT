import React from 'react';
import CardRecents from './CardRecents';
import Card from './Card';

const Recents = ({ recents, fromFavorites }) => {
  if (fromFavorites) {
    return (
      <div className="ui three doubling cards">
        {
          recents.map(item => (
            <Card
              key={item.id}
              id={item.id}
              commId={item.commerce.id}
              name={item.commerce.name}
              city={item.commerce.city}
              country={item.commerce.country.name}
              type={item.commerce.category.name}
              photos={item.commerce.photos}
              fromFavorites
            />
          ))
        }
      </div>
    );
  }

  return (
    <div className="ui three doubling cards">
      {
        recents.map(item => (
          <CardRecents
            key={item.id}
            id={item.id}
            commId={item.id}
            name={item.name}
            city={item.city}
            country={item.country.name}
            type={item.category.name}
            photos={item.photos}
            fromFavorites={false}
          />
        ))
      }
    </div>
  );
};

export default Recents;
