import React from 'react';
import { connect } from 'react-redux';

const FilterSelector = ({ all }) => {
  const selectorDisplay = () => {
    const btn = document.getElementById('filter');
    const menu = document.getElementById('menu');
    btn.classList.toggle('active');
    btn.classList.toggle('visible');
    menu.classList.toggle('transition');
    menu.classList.toggle('visible');
  };
  return (
    <div className="ui buttons">
      <div
        className="ui button"
        onClick={selectorDisplay}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        Filter
      </div>
      <div
        id="filter"
        className="ui floating dropdown icon button"
        onClick={selectorDisplay}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        <i className="dropdown icon" />
        <div id="menu" className="menu">
          {
            all ? all.map(item => (
              <div key={item.id} id={item.id} className="item">
                <i className="angle right purple icon" />
                {item.name}
              </div>
            ))
              : <div />
          }
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = ({ filters }) => ({ all: filters.all });

export default connect(mapStateToProps, null)(FilterSelector);
