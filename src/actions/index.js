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

// TODO: refactor fetchProperTrends -> fetchTrends
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

export function fetchProperTrends() {
  return function (dispatch) {
    dispatch({
      type: types.FETCH_PROPER_TRENDS_REQUEST
    });
    return axios.get(`${API_ROOT}/trends`)
      .then(response => {
        dispatch({
          type: types.FETCH_PROPER_TRENDS_SUCCESS,
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.FETCH_PROPER_TRENDS_ERROR,
          error
        });
      });
  };
}