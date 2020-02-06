import React from 'react';
import CardRecents from './CardRecents';

const Recents = ({ recents }) => (
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
          type={item.commerce_type.name}
          photos={item.photos}
        />
      ))
    }
  </div>
);

export default Recents;
