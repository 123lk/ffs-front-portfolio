import React from 'react';

class HomeNewsStoryFeedCard extends React.Component {
  render () {
    return (
      <div className="container-fluid home-news-story-feed-card">
        <p>
      {this.props.title}
        </p>
      </div>
    );
  }
}

export default HomeNewsStoryFeedCard;