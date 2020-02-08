import React from 'react';
import { connect } from 'react-redux';
import Recents from '../Components/dashboard/Recents';
import FilterSelector from '../Components/FilterSelector';

const Favorites = ({ commerces }) => {
  const template = (data) => (
    <div>
      <div className="ui clearing segment top-head pad-top">
        <h2 className="ui left floated header top-title">{data.length > 0 ? `Favorites (${data.length})` : 'At the moment, you do not have favorites'}</h2>
        <div className="ui right floated header top-filter">
          {data.length > 0 ? <FilterSelector fromFavorites /> : <div />}
        </div>
      </div>
      <Recents recents={commerces.favorites} fromFavorites />
    </div>
  );

  return template(commerces.favorites);
};

const mapStateToProps = state => ({ commerces: state.commerces });
export default connect(mapStateToProps, null)(Favorites);
