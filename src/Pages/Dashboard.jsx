import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Carousel from '../Components/dashboard/Carousel';
import Recents from '../Components/dashboard/Recents';
import { getAllNoFavCommerces } from '../redux/commerceActions';
import { fetchMyFavs } from '../redux/fetchFavoriteActions';
import { checkSignedIn } from '../redux/authActions';

const Dashboard = ({ user }) => {
  const dispatch = useDispatch();
  const currentUser = checkSignedIn(user, dispatch);

  useEffect(() => {
    dispatch(getAllNoFavCommerces(currentUser));
    dispatch(fetchMyFavs(user));
  }, [dispatch]);


  const favoritesCollection = useSelector(state => state.fetchedFavs) || [];
  const recentCollection = useSelector(state => state.commerces) || [];

  return (
    <div>
      <h2>{favoritesCollection.length === 0 ? `Welcome ${user.current.name}` : 'Your Favorites'}</h2>
      { favoritesCollection.length > 0
        ? <Carousel commerces={favoritesCollection} />
        : <div />}

      <div className="ui section divider" />
      <h2>Top based on your location</h2>
      <Recents recents={recentCollection} />
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Dashboard);
