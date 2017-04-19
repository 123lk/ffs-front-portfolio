import React from 'react';
import NavBar from './NavBar/NavBar'; 

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>This is App</h1>
        <NavBar />
        <div className="section">
          {this.props.children} 
        </div>
      </div>
    );
  }
}

export default App;