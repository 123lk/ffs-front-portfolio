import React from 'react';
import '../../css/UserNav.scss';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsActive: false,
      menuClass: 'nav-right nav-menu is-active'
    };
  }
  render() {
    return (
      <div id= 'navigation' className ='nav'>
        <div className='nav-toggle' onClick={toggleMenu.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className ='nav-left'>
        <a className='nav-item' href="http://localhost:9090/">Create account</a>
        </div>

        <div id='menu' className={this.state.menuClass}>
         
          <a className='nav-item' href="http://localhost:9090/">Create account</a>
          <a className='nav-item' href="http://localhost:9090/">Log in</a>
          <a className='nav-item' href="http://localhost:9090/reportform">Report fake news</a>
          <a className='nav-item' href="http://localhost:9090/">FFS Chrome App</a>
        </div>
      </div>
    );
  }
}

function toggleMenu() {
  if (this.state.navIsActive) {
    this.setState({
      navIsActive: !this.state.navIsActive,
      menuClass: 'nav-right nav-menu'
    });
  }
  else {
    this.setState({
      navIsActive: !this.state.navIsActive,
      menuClass: 'nav-right nav-menu is-active'
    });
  }


}

export default UserNav;