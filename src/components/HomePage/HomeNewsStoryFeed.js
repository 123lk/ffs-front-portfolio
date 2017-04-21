import React from 'react';
import HomeNewsStoryFeedCard from './HomeNewsStoryFeedCard';
import {connect} from 'react-redux';

class HomeNewsStoryFeed extends React.Component {
  render () {
    return (
      <div>
      <h1>This is a HomeNewsStoryFeed</h1>
      <HomeNewsStoryFeedCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(HomeNewsStoryFeed);