import React from 'react';

const IndexData = ({ data }) => {
  console.log('data ->', data)

  const {
    name,
    description,
    country,
    state,
    city,
    address,
    landline,
    mobile,
    email,
    website,
    instagram,
    commerce_type,
    favorites,
  } = data;
  if (Object.keys(data).length) {

    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">
            {name}
            <div className="meta type-type">{commerce_type.name}</div>
          </div>
          <div className="meta">2 days ago</div>
          <div className="description">
            <p>
              {description}
  .
            </p>
            <div className="ui list">
              <div className="item">
                <i className="clock outline purple icon" />
                <div className="content">
                {country.name}
                </div>
              </div>
              <div className="item">
                <i className="address card outline purple icon" />
                <div className="content">
                    {address}
                </div>
              </div>
              <div className="item">
                <i className="mobile alternate purple icon" />
                <div className="content">
                    {mobile}
                </div>
              </div>
              <div className="item">
                <i className="phone purple icon" />
                <div className="content">
                    {landline}
                </div>
              </div>
              <div className="item">
                <i className="map marker purple alternate icon" />
                <div className="content">
                    {city}
                </div>
              </div>
              <div className="item">
                <i className="globe purple icon" />
                <div className="content">
                    {`${state} - ${country.name}`}
                </div>
              </div>
              <div className="item">
                <i className="at purple icon" />
                <div className="content">
    <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              <div className="item">
                <i className="linkify purple icon" />
                <div className="content">
    <a href={website}>{website}</a>
                </div>
              </div>
              <div className="item">
                <i className="instagram purple icon" />
                <div className="content">
    <a href={`https://www.instagram.com/${instagram}`}>{instagram}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <i className="heart purple icon" />
                  {`${favorites.length} likes`}
        </div>
      </div>
    );
  }

  return <div />;
};

export default IndexData;
