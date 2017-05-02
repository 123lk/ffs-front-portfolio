import React from 'react';
import NavBar from './NavBar/NavBar';
import '../css/main.scss';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div className="">
         <div className="nav">
            <NavBar />
        <div className="columns">
          </div>
          <div className="column">
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