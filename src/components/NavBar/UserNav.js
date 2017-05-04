import React from 'react';
import '../../css/UserNav.scss';
import SearchBar from '../AdditionalComponents/SearchBar';
import BlackFlag from '../../icons/Flag-Black.png';

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
          <a className = 'nav-item' href='http://https://forfactsake.herokuapp.com/'><img src = {BlackFlag}/></a>
        </div>

        <div id='menu' className={this.state.menuClass}>

          <a className='nav-item' href="http://https://forfactsake.herokuapp.com/">Create account</a>
          <a className='nav-item' href="http://https://forfactsake.herokuapp.com/">Log in</a>
          <a className='nav-item' href="http://https://forfactsake.herokuapp.com/reportform">Report fake news</a>
          <a className='nav-item' href="http://https://forfactsake.herokuapp.com/">FFS Chrome App</a>
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