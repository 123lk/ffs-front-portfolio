import {combineReducers} from 'redux';
import articles from './articles.reducer';
import trends from './trends.reducer';

export default combineReducers({
  articles, trends
});