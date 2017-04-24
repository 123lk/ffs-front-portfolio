import * as axios from '../api';
import * as types from './types';

const API_ROOT = ''; // TODO: fill in when back end is done

export function fetchHome() {
  return function (dispatch) {
    dispatch({ type: types.FETCH_HOME_REQUEST });
    return axios.get(`${API_ROOT}/home`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_HOME_SUCCESS,
          articles: response.data,
          trends: response.trends
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

export function fetchDomain() {
  return function (dispatch) {
    dispatch({ type: types.FETCH_DOMAIN_REQUEST });
    return axios.get(`${API_ROOT}/domain`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_DOMAIN_SUCCESS,
          domain: response.domain,
          articles: response.data,
          trends: response.trends
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

export function fetchArticle() {
  return function (dispatch) {
    dispatch({ type: types.FETCH_ARTICLE_REQUEST });
    return axios.get(`${API_ROOT}/article`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_ARTICLE_SUCCESS,
          articles: response.data,
          comments: response.comments, 
          trends: response.trends
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_ARTICLE_ERROR,
          error
        });
      });
  };
}

export function fetchTrends() {
  return function (dispatch) {
    dispatch({ type: types.FETCH_TRENDS_REQUEST });
    return axios.get(`${API_ROOT}/reportform`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_TRENDS_SUCCESS,
          trends: response.trends
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_TRENDS_ERROR,
          error
        });
      });
  };
}