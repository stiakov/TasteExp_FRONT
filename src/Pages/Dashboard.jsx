import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Carousel from '../Components/dashboard/Carousel';
import { getCommerces } from '../redux/commerceActions';
import { fetchMyFavs } from '../redux/fetchFavoriteActions';
import { checkSignedIn } from '../redux/authActions';

const Dashboard = ({ user }) => {
  const dispatch = useDispatch();
  checkSignedIn(user, dispatch);
  useEffect(() => {
    dispatch(getCommerces());
    dispatch(fetchMyFavs(user));
  }, [dispatch]);


  const commerceCollection = useSelector(state => state.fetchedFavs) || [];

  return (
    <div>
      <h2>{user ? `Welcome ${user.current.name}` : ''}</h2>
      <Carousel commerces={commerceCollection} />
      <div className="ui grid">
        {/* <div className="doubling eight column row">
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
          <div className="column">X</div>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Dashboard);
