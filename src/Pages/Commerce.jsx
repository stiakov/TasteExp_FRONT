/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import giphy from '../images/giphy1.gif';
import { connect, useDispatch } from 'react-redux';
import IndexData from '../Components/commerce/IndexData';

const Commerce = ({ show }) => {
  return (
    <div>
      <div className="ui hidden divider" />
      <h1 className="header commerce-name">{show.name}</h1>
      <div className="ui two column doubling stackable grid container">
        <div className="twelve wide column">
          <img className="ui fluid image" src={giphy} alt="place view" />
        </div>
        <div className="four wide column">
          { show ? <IndexData data={show} /> : <div /> }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ commerces }) => ({ show: commerces.showOne });

export default connect(mapStateToProps, null)(Commerce);
