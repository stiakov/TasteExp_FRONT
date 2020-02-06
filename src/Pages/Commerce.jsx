import React from 'react';
import giphy from '../images/giphy1.gif';
import IndexData from '../Components/commerce/IndexData';

const Commerce = () => {
  return (
    <div>
      <div className="ui hidden divider" />
      <h1 className="header commerce-name">Commerce Name</h1>
      <div className="ui two column doubling stackable grid container">
        <div className="twelve wide column">
          <img className="ui fluid image" src={giphy} alt="place view" />
        </div>
        <div className="four wide column">
          {/* <IndexData
            name={}
            description={}
            country={}
            state={}
            city={}
            address={}
            landline={}
            mobile={}
            email={}
            website={}
            instagram={}
            commerceType={}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Commerce;
