import * as types from '../actions/types';
import {normalizeArrayById} from '../helpers';

export const initialState = {
  loading: false,
  error: null,
  domainArticlesById: {}, 
  domainData: {}
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_DOMAIN_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_DOMAIN_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_DOMAIN_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        domainData: action.data.domainData,
        domainArticlesById: normalizeArrayById(action.data.articles)
      });
    default:
      return prevState;
  }
}
// TODO: Refactor to order by date once time stamp added to API
export function getArticlesInOrder(domainArticlesById) {
  return Object.values(domainArticlesById);
}