import {combineReducers} from 'redux';
import articles from './articles.reducer';
import trends from './trends.reducer';
import currentArticle from './currentArticle.reducer';

export default combineReducers({
  articles, trends, currentArticle
});