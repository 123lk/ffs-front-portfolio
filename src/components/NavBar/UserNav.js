import React from 'react';
import AgAutocomplete from 'react-algoliasearch';
import '../../css/UserNav.scss';

class UserNav extends React.Component {
  render() {
    return (
      <div className="nav-item">
        <div className="algolia-search">
          <AgAutocomplete
            apiKey={'ecebdf5fdebcddc8c94f127d1eee4e4c'}
            appId={'BSCGDWJBKU'}
            displayKey='name'
            indices={[{ index: 'FFS' }]}
            inputId='input-search'
            placeholder='Search...'
          />
        </div>
        <div className="nav-item">
          <ul>
            <li><a href="http://localhost:9090/">Create account</a></li>
            <li><a href="http://localhost:9090/">Log in</a></li>
            <li><a href="http://localhost:9090/reportform">Report fake news</a></li>
            <li><a href="http://localhost:9090/">FFS Chrome App</a></li>
          </ul>
        </div>
      </div >
    );
  }
}

export default UserNav;