import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCommerces, filterFavorites } from '../redux/commerceActions';
import { setCurrentFilter } from '../redux/categoryActions';

const FilterSelector = ({ all, user, fromFavorites }) => {
  const dispatch = useDispatch();

  const selectorDisplay = () => {
    const btn = document.getElementById('filter');
    const menu = document.getElementById('menu');
    btn.classList.toggle('active');
    btn.classList.toggle('visible');
    menu.classList.toggle('transition');
    menu.classList.toggle('visible');
  };

  const filterResults = (user, filter) => {
    const buttonText = document.getElementById('nameFilterButton');
    const title = filter ? filter.name : 'All';
    const filterId = filter ? filter.id : 0;
    dispatch(setCurrentFilter(filterId));
    if (fromFavorites) {
      dispatch(filterFavorites(user, filterId));
    } else {
      dispatch(filterCommerces(user, filterId));
    }
    buttonText.innerText = title;
  };

  return (
    <div className="ui buttons">
      <div
        id="nameFilterButton"
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
          <div
            key="all"
            id="all"
            className="item"
            onClick={() => filterResults(user)}
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
          >
            <i className="angle right purple icon" />
            All
          </div>
          {
            all ? all.map(item => (
              <div
                key={`filter-${item.id}`}
                id={item.id}
                className="item"
                onClick={() => filterResults(user, item)}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              >
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

const mapStateToProps = ({ filters, user }) => ({
  all: filters.all,
  user,
});

export default connect(mapStateToProps, null)(FilterSelector);
