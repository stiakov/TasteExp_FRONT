import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Carousel from '../Components/dashboard/Carousel';
import { getCommerces } from '../redux/commerceActions';

const Dashboard = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommerces());
  }, [dispatch]);

  const commerceCollection = useSelector(state => state.commerces) || [];
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
