/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFav, getOneCommerce } from '../../redux/commerceActions';

const Card = ({
  id,
  commId,
  name,
  country,
  city,
  type,
  user,
  photos,
}) => {
  const dispatch = useDispatch();
  const handleFavClick = (event) => {
    event.preventDefault();
    dispatch(deleteFav({ id, user }));
  };

  const getId = (e) => {
    const str = e.target.id.split('-');
    const id = str.length > 1 ? str[1] : str[0];
    return id;
  };

  const handleHover = (e) => {
    const idBtn = getId(e);
    const heartIcon = document.getElementById(`favBtn-${idBtn}`);
    heartIcon.classList.toggle('red');
  };

  const showCommerce = () => {
    dispatch(getOneCommerce(commId));
  };

  return (
    <div className="ui card cardex">
      <img
        className="card-image"
        src={photos[0].image_data}
        alt="snapshot"
      />
      <div className="content">
        <div
          className="header"
          role="button"
          tabIndex="0"
          onClick={showCommerce}
        >
          <Link
            to={`/commerce/${commId}`}
            className="link"
          >
            {name}
          </Link>
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
          <i id={`favBtn-${id}`} className="heart red icon fav-ico" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Card);
