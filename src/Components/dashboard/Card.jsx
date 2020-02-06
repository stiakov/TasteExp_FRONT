import React from 'react';
import { connect, useDispatch } from 'react-redux';
import citric from '../../images/motor.jpeg';
import { deleteFav } from '../../redux/commerceActions';

const Card = ({
  id,
  name,
  country,
  city,
  type,
  user,
}) => {
  const dispatch = useDispatch();
  const handleFavClick = (event) => {
    event.preventDefault();
    dispatch(deleteFav({ id, user }));
  };

  const handleHover = (e) => {
    const str = e.target.id.split('-');
    const idBtn = str.length > 1 ? str[1] : str[0];
    const heartIcon = document.getElementById(`favBtn-${idBtn}`);
    heartIcon.classList.toggle('red');
  };

  return (
    <div className="ui card cardex">
      <img className="card-image" src={citric} alt="snapshot" />
      <div className="content">
        <div className="header">
          {name}
          <div className="meta type-type">{type}</div>
        </div>
        <div className="description">
          {`${city} / ${country}`}
        </div>
        <button
          id={id}
          type="submit"
          onClick={handleFavClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="ui circular icon button fav"
        >
          <i id={`favBtn-${id}`} className="heart red icon" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Card);
