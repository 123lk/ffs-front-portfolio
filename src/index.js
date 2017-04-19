import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux'; 
// import thunk from 'redux-thunk'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { createLogger } from 'redux-logger'; 

import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import DomainPage from './components/DomainPage/DomainPage';

// const reducer = combineReducers({

// });

// const logger = createLogger(); 
// const store = createStore(reducer, applyMiddleware(thunk, logger)); 

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/reportform" component={FormPage} />
      <Route path="/domain" component={DomainPage} />
      <Route path="/article" component={ArticlePage} />
    </Route>
  </Router>, document.getElementById('root'));

  // todo /domain/:domain_id && /article/:article_id
