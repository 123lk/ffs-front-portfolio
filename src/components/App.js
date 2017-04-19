import React from 'react';
import HomePage from './HomePage/HomePage';
import DomainPage from './DomainPage/DomainPage';
import ArticlePage from './ArticlePage/ArticlePage';

class App extends React.Component {
  render () {
    return (
      <div>
        <ArticlePage/>
      </div>
    );
  }
}

export default App;