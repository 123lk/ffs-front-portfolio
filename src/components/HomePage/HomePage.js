import React from 'react';
import HomeNewsStoryFeed from './HomeNewsStoryFeed';
import HomeTextArea from './HomeTextArea';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <div className="row home-text-area">
          <HomeTextArea/>
        </div>
        <div className="row home-news-story-feed">
          <HomeNewsStoryFeed/>
        </div>
      </div>
    );
  }
}

export default HomePage;