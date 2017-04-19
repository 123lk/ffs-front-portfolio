import React from 'react';
import HomeNewsStoryFeed from './HomeNewsStoryFeed';
import HomeTextArea from './HomeTextArea';
import NavBar from '../NavBar/NavBar';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a HomePage</h1>
        <NavBar/>
        <HomeTextArea/>
        <HomeNewsStoryFeed/>
      </div>
    );
  }
}

export default HomePage;