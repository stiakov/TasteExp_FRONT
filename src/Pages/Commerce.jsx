import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import giphy from '../images/giphy1.gif';
import IndexData from '../Components/commerce/IndexData';

const Commerce = ({ show }) => {
  if (show) {
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
  }
  return <Redirect to="/" />;
};

const mapStateToProps = ({ commerces }) => ({ show: commerces.showOne });

export default connect(mapStateToProps, null)(Commerce);
