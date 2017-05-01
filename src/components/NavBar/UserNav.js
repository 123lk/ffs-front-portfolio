import React from 'react';
import AgAutocomplete from 'react-algoliasearch';
import '../../css/UserNav.scss';

class UserNav extends React.Component {
  render() {
    return (
      <div className="user-nav">
        <a href="http://localhost:9090/"> <img src="http://1k6kcz5e21e3yunpze4q1cxn.wpengine.netdna-cdn.com/files/2015/02/ffs.jpg" alt="logo" /></a>
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
        <div className="user-nav-box">
          <ul>
            <li><a href="http://localhost:9090/">Home</a></li>
            <li><a href="http://localhost:9090/">Log in</a></li>
            <li><a href="http://localhost:9090/">Create account</a></li>
            <li><a href="http://localhost:9090/reportform">Report fake news</a></li>
            <li><a href="http://localhost:9090/">Google chrome app</a></li>
          </ul>
        </div>
      </div >
    );
  }
}

export default UserNav;