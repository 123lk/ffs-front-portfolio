import * as types from '../actions/types';
import {normalizeArrayById} from '../helpers';

export const initialState = {
  loading: false,
  error: null,
  articleData: {},
  commentsById: {}
};

// TODO: test
export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_CURRENT_ARTICLE_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_CURRENT_ARTICLE_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_CURRENT_ARTICLE_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        articleData: action.data.articleData,
        commentsById: normalizeArrayById(action.data.comments)
      });
    default:
      return prevState;
  }
}

// TODO: test
export function getCommentsByVotes(commentsById) {
  return Object.values(commentsById)
    .sort(function (a, b) {
      return b.votes - a.votes;
    });
}
