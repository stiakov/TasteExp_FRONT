import React from 'react';
import { connect } from 'react-redux';

const FilterSelector = (props) => {

  const selectorDisplay = (e) => {
    const btn = document.getElementById('filter');
    const menu = document.getElementById('menu');
    btn.classList.toggle('active');
    btn.classList.toggle('visible');
    menu.classList.toggle('transition');
    menu.classList.toggle('visible');
  };
  return (
    <div className="ui buttons">
      <div className="ui button" onClick={selectorDisplay}>Filter</div>
      <div
        id="filter"
        className="ui floating dropdown icon button"
        onClick={selectorDisplay}
      >
        <i className="dropdown icon" />
        <div id="menu" className="menu">
          <div className="item"><i className="edit icon" /> Edit Post</div>
          <div className="item"><i className="delete icon" /> Remove Post</div>
          <div className="item"><i className="hide icon" /> Hide Post</div>
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = ({ commerces }) => ({ show: commerces.showOne });

export default connect(mapStateToProps, null)(FilterSelector);
