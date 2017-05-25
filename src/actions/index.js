import axios from 'axios';
import * as types from './types';

const API_ROOT = 'https://tik1xt1cj4.execute-api.eu-west-2.amazonaws.com/dev';

export function fetchHome() {
  return function (dispatch) {
    dispatch({ type: types.FETCH_HOME_REQUEST });
    return axios.get(`${API_ROOT}/home`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_HOME_SUCCESS,
          articles: response.data
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_HOME_ERROR,
          error
        });
      });
  };
}

// NOTE: fake API only works for /domain/1
export function fetchDomain(id) {
  return function (dispatch) {
    dispatch({ type: types.FETCH_DOMAIN_REQUEST });
    return axios.get(`${API_ROOT}/domains/${id}`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_DOMAIN_SUCCESS,
          data: response.data
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_DOMAIN_ERROR,
          error
        });
      });
  };
}

// NOTE: fake API only works for /articles/1
export function fetchCurrentArticle(id) {
  return function (dispatch) {
    dispatch({ type: types.FETCH_CURRENT_ARTICLE_REQUEST });
    return axios.get(`${API_ROOT}/articles/${id}`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_CURRENT_ARTICLE_SUCCESS,
          data: response.data
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_CURRENT_ARTICLE_ERROR,
          error
        });
      });
  };
}

export function voteComment(commentId, vote) {
  return function (dispatch) {
    dispatch({
      type: types.VOTE_COMMENT_REQUEST
    });
    return axios
      .put(`${API_ROOT}/comments/?id=${commentId}&vote=${vote}`)
      .then(response => {
        dispatch({
          type: types.VOTE_COMMENT_SUCCESS,
          data: response.data.numVotes,
          id: commentId
        });
      })
      .catch(error => {
        dispatch({
          type: types.VOTE_COMMENT_ERROR,
          error: error
        });
      });
  };
}
