import React from 'react';

class UserNav extends React.Component {
  render() {
    return (
      <div className="user-nav">
        <a href="http://localhost:9090/"> <img src="http://1k6kcz5e21e3yunpze4q1cxn.wpengine.netdna-cdn.com/files/2015/02/ffs.jpg" alt="logo" /></a>
        <div className="search-bar">
          <div className="row">
            <div className="col-md-12">
              <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input type="text" className="form-control input-md" placeholder="Search..." />
                  <span className="input-group-btn">
                    <button className="btn btn-info btn-md" type="button">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
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