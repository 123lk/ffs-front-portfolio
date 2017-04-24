import React from 'react';

class UserNav extends React.Component {
  render() {
    return (
      <div className="user-nav">
        <a href="http://localhost:9090/"> <img src="http://1k6kcz5e21e3yunpze4q1cxn.wpengine.netdna-cdn.com/files/2015/02/ffs.jpg" alt="logo" /></a>
        <div className="user-nav-box">
          <ul>
            <li><a href="http://localhost:9090/">Home</a></li>
            <li>Log in</li>
            <li>Create account</li>
            <li><a href="http://localhost:9090/reportform">Report fake news</a></li>
            <li>Google chrome app</li>
          </ul>
        </div>
      </div >
    );
  }
}

export default UserNav;