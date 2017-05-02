import React from 'react';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.scss';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 nav-column">
            <NavBar />
          </div>
          <div className="col-md-8 main-column">
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