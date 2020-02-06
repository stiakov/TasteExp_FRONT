import React from 'react';
import { connect, useDispatch } from 'react-redux';
import citric from '../../images/motor.jpeg';
import { markAsFav } from '../../redux/commerceActions';

const CardRecents = ({
  id,
  name,
  country,
  city,
  type,
  user,
}) => {
  const dispatch = useDispatch();
  const handleFavClick = (e) => {
    e.preventDefault();
    dispatch(markAsFav({ id, user }));
    const str = e.target.id.split('-');
    const idBtn = str.length > 1 ? str[1] : str[0];
    const heartIcon = document.getElementById(`favTopBtn-${idBtn}`);
    heartIcon.classList.add('red');
    heartIcon.classList.remove('outline');
  };

  const handleHover = (e) => {
    const str = e.target.id.split('-');
    const idBtn = str.length > 1 ? str[1] : str[0];
    const heartIcon = document.getElementById(`favTopBtn-${idBtn}`);
    heartIcon.classList.toggle('outline');
  };

  return (
    <div className="ui card column">
      <img className="recent-image" src={citric} alt="snapshot" />
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
          className="ui circular icon button recent-fav"
        >
          <i id={`favTopBtn-${id}`} className="heart outline icon" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(CardRecents);
