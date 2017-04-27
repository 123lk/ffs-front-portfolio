import React from 'react';
import PropTypes from 'prop-types';

class HomeNewsStoryFeedCard extends React.Component {
  render() {
    return (
      <div className="container-fluid home-news-story-feed-card">
        <div className="picture-div col-md-2">
          <img src="http://blog.lostcollective.com/wp-content/uploads/2016/08/the-guardian-logo.png" />
        </div>
        <div className="col-md-9">
          <h4><b>{this.props.title}</b></h4>
          <span>{this.props.domain}</span>
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