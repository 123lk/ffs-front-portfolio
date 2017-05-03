import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/ReportForm';
import ArticlePage from './components/ArticlePage/ArticlePage';
import DomainPage from './components/DomainPage/DomainPage';

const logger = createLogger(); 
const store = createStore(reducer, applyMiddleware(thunk, logger)); 

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/reportform" component={FormPage}/>
        <Route path="/domains/:id" component={DomainPage} />
        <Route path="/articles/:id" component={ArticlePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

  // TODO: /domain/:domain_id && /article/:article_id
