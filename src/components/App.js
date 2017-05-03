import React from 'react';
import UserNav from './NavBar/UserNav';
import 'bulma/css/bulma.css';
import '../css/app.scss';
import PropTypes from 'prop-types';


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <UserNav />
        </div>
        <div className="content">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;