import React from 'react';
import '../../css/UserNav.scss';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsActive: false
    };
  }
  render() {
    return (
      <div className='nav-right nav-menu'>
        <a className='nav-item' href="http://localhost:9090/">Create account</a>
        <a className='nav-item' href="http://localhost:9090/">Log in</a>
        <a className='nav-item' href="http://localhost:9090/reportform">Report fake news</a>
        <a className='nav-item' href="http://localhost:9090/">FFS Chrome App</a>
        <div className='nav-toggle' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

function toggleMenu() {
  this.setState({
    navIsActive: !this.state.navIsActive
});
console.log(this.state.navIsActive);
  
 }

export default UserNav;