import React from 'react';
import TrendsBox from './TrendsBox';
import UserNav from './UserNav';

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a NavBar</h1>
        <UserNav/>
        <TrendsBox/>
      </div>
    );
  }
}

export default NavBar;