import * as axios from '../api';
import * as types from './types';

const API_ROOT = ''; // TODO: fill in when back end is done

export function fetchHome () {
  return function (dispatch) {
    dispatch({type: types.FETCH_HOME_REQUEST});
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