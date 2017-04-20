import React from 'react';
import TrendsBox from './TrendsBox';
import UserNav from './UserNav';

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <div className="row user-nav">
          <UserNav/>
        </div>
        <div className="row trends-box">
          <TrendsBox/>
        </div>
      </div>
    );
  }
}

export default NavBar;