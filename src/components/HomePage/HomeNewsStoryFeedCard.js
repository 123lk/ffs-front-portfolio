import React from 'react';
import PropTypes from 'prop-types';

class HomeNewsStoryFeedCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <img src="http://blog.lostcollective.com/wp-content/uploads/2016/08/the-guardian-logo.png" />
            </div>
          </div>
        <div className="media-content">
          <h4 className="title-is-4"><b>{this.props.title}</b></h4>
          <span>{this.props.domain}</span>
        </div>
        </div>
      </div>
    );
  }
}

HomeNewsStoryFeedCard.propTypes = {
  title: PropTypes.string,
  domain: PropTypes.string
};


export default HomeNewsStoryFeedCard;


{/*<div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="http://blog.lostcollective.com/wp-content/uploads/2016/08/the-guardian-logo.png" alt="Image">
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{this.props.title}</p>
        <p className="subtitle is-6">{this.props.domain}</p>
      </div>
    </div>*/}