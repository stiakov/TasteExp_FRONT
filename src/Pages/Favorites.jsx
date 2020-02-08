import React from 'react';
import { connect } from 'react-redux';
import Recents from '../Components/dashboard/Recents';
import FilterSelector from '../Components/FilterSelector';

const Favorites = ({ commerces }) => {
  const template = (data) => (
    <div>
      <div className="ui clearing segment top-head pad-top">
        <h2 className="ui left floated header top-title">{data.length > 0 ? `Favorites (${data.length})` : 'Save here your favorites'}</h2>
        <div className="ui right floated header top-filter">
          <FilterSelector fromFavorites />
        </div>
      </div>
      <Recents recents={commerces.favorites} fromFavorites />
    </div>
  );

  return template(commerces.favorites);
};

const mapStateToProps = state => ({ commerces: state.commerces });
export default connect(mapStateToProps, null)(Favorites);
