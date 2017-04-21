import {normalizeArrayById} from '../helpers';
import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  byId: {}
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_HOME_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_HOME_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_HOME_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        byId: normalizeArrayById(action.articles)
      });
    default:
      return prevState;
  }
}

export function getTopArticles (articles, num) {
  // TODO: sort this out
  // selector that takes in the whole state.articles and a number
  // returns an array of the top articles ordered chronologically
  return Object.keys(articles.byId)
    .map((id) => articles.byId[id])
    .sort((a, b) => {
      return a.date - b.date;
    })
    .slice(0, num);
}