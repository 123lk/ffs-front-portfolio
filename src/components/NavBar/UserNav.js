import React from 'react';
import '../../css/UserNav.scss';

class UserNav extends React.Component {
  render() {
    return (
        <div className ='nav-right nav-menu'>
            <a className ='nav-item' href="http://localhost:9090/">Create account</a>
            <a className ='nav-item' href="http://localhost:9090/">Log in</a>
            <a className ='nav-item' href="http://localhost:9090/reportform">Report fake news</a>
            <a className ='nav-item' href="http://localhost:9090/">FFS Chrome App</a>
      </div>
    );
  }
}

export default UserNav;