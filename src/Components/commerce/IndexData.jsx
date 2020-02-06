import React from 'react';

const IndexData = (props) => {
  const { description } = props;
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="center aligned header">Cute Dog</div>
        <div className="meta">2 days ago</div>
        <div className="description">
          <p>
            {description}
.
          </p>
          <div className="ui list">
            <div className="item">
              <i className="users icon" />
              <div className="content">
                  Semantic UI
              </div>
            </div>
            <div className="item">
              <i className="marker icon" />
              <div className="content">
                  New York, NY
              </div>
            </div>
            <div className="item">
              <i className="mail icon" />
              <div className="content">
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
              </div>
            </div>
            <div className="item">
              <i className="linkify icon" />
              <div className="content">
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <i className="check icon" />
                121 Votes
      </div>
    </div>
  );
};

export default IndexData;
