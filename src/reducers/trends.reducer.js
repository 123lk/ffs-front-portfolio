import * as types from '../actions/types';
import {normalizeArrayById} from '../helpers';

export const initialState = {
  loading: false,
  error: null,
  trendsById: {}
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROPER_TRENDS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_PROPER_TRENDS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_PROPER_TRENDS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        trendsById: normalizeArrayById(action.data.trends)
      });
    default:
      return prevState;
  }
}

export function getTrendsByPopularity (byId) {
  return Object.keys(byId)
    .map(key => byId[key])
    .sort((a, b) => b.popularity - a.popularity);
}