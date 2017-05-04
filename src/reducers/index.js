import {combineReducers} from 'redux';
import articles from './articles.reducer';
import currentArticle from './currentArticle.reducer';
import domain from './domain.reducer';

export default combineReducers({
  articles, currentArticle, domain
});