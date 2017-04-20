import React from 'react';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.scss';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 nav-column">
            <NavBar />
          </div>
          <div className="col-md-9 main-column">
            {this.props.children} 
          </div>
        </div>
      </div>
    );
  }
}

export default App;