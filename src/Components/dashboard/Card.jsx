import React from 'react';

const Card = () => {
  return (
    <div className="ui card cardex">
      <div className="content">
        <div className="center aligned header">Jenny Hess</div>
        <div className="center aligned description">
          <p>Jenny is a student studying Media Management at the New School</p>
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" /> Jenny
        </div>
      </div>
    </div>

  );
};

export default Card;
