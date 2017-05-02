import React from 'react';
import NavBar from './NavBar/NavBar';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div>
         <div className="nav">
            <NavBar />
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