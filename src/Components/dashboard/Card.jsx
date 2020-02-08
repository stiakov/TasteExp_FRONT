import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
  fromFavorites,
}) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  const customStyles = {
    image: !fromFavorites ? 'card-image' : 'recent-image',
    card: fromFavorites ? 'ui card column' : 'ui card cardex',
    heartIcon: fromFavorites ? 'ui circular icon button recent-fav' : 'ui circular icon button fav',
  };

  const handleFavClick = (event) => {
    event.preventDefault();
    dispatch(deleteFav({ id, user, filter: filter.current }));
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
    <div className={customStyles.card}>
      <img
        className={customStyles.image}
        src={photos[0].image_data}
        alt="snapshot"
      />
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
          className={customStyles.heartIcon}
        >
          <i id={`favBtn-${id}`} className="heart red icon fav-ico" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Card);
