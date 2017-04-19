import React from 'react';
import HomeNewsStoryFeed from './HomeNewsStoryFeed';
import HomeTextArea from './HomeTextArea';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a HomePage</h1>
        <HomeTextArea/>
        <HomeNewsStoryFeed/>
      </div>
    );
  }
}

export default HomePage;