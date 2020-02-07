import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Carousel from '../Components/dashboard/Carousel';
import Recents from '../Components/dashboard/Recents';
import { getAllNoFavCommerces, fetchMyFavs } from '../redux/commerceActions';
import FilterSelector from '../Components/FilterSelector';

const Dashboard = ({ user, commerces }) => {
  const dispatch = useDispatch();
  const { favorites, noFavorites } = commerces;

  useEffect(() => {
    dispatch(getAllNoFavCommerces(user));
    dispatch(fetchMyFavs(user));
  }, [dispatch]);

  return (
    <div>
      <h2>{favorites.length === 0 ? `Welcome ${user.current.name}` : 'Your Favorites'}</h2>
      { favorites.length > 0
        ? <Carousel commerces={favorites} />
        : <div />}

      <div className="ui section divider" />
      <div className="ui clearing segment top-head">
        <h2 className="ui left floated header top-title">Top based on your location</h2>
        <div className="ui right floated header top-filter">
          <FilterSelector />
        </div>
      </div>
      <Recents recents={noFavorites} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  commerces: state.commerces,
});
export default connect(mapStateToProps, null)(Dashboard);
