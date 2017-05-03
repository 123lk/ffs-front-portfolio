import React from 'react';
import '../../css/UserNav.scss';
import SearchBar from '../AdditionalComponents/SearchBar';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsActive: false,
      menuClass: 'nav-right nav-menu'
    };
  }
  render() {
    return (
      <div id='navigation' className='nav'>
        <div className='nav-toggle' onClick={toggleMenu.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='nav-left'>
          <div className="search-div">
          <SearchBar />
          </div>
        </div>

        <div className = 'nav-center'>
          <a className = 'nav-item' href='http://localhost:9090/'>Logo</a>
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