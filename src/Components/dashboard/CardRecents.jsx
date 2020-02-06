import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { markAsFav, getOneCommerce } from '../../redux/commerceActions';

const CardRecents = ({
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

  const showCommerce = () => {
    dispatch(getOneCommerce(commId));
  };


  return (
    <div className="ui card column">
      <img className="recent-image" src={photos[0].image_data} alt="snapshot" />
      <div className="content">
        <div
          className="header"
          role="button"
          tabIndex="0"
          onClick={showCommerce}
          onKeyPress={() => {}}
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
          className="ui circular icon button recent-fav"
        >
          <i id={`favTopBtn-${id}`} className="heart outline icon fav-ico" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(CardRecents);
