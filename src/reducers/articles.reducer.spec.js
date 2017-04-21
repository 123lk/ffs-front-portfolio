import {expect} from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import articlesReducer, {initialState} from './articles.reducer';

describe('reducers:articles', () => {
  it('is a function', () => {
    expect(articlesReducer).to.be.a('function');
  });
  it('returns the prevState for unhandled actions', () => {
    const initialState = {
      whatever: 10291094810
    };
    const action = {type: 'whatever'};
    expect(articlesReducer(initialState, action)).to.equal(initialState);
  });
  it('returns the initialState if no prevState is passed', () => {
    const action = {type: 'whatever'};
    expect(articlesReducer(undefined, action)).to.equal(initialState);
  })
  describe('action:FETCH_HOME', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = {type: types.FETCH_HOME_REQUEST};
      const expectedState = {
        loading: true,
        error: null
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
    it('handles ERROR', () => {
      const initialState = deepFreeze({
        loading: true,
        error: null
      });
      const action = {type: types.FETCH_HOME_ERROR, error: 'hello'};
      const expectedState = {
        loading: false,
        error: 'hello'
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
    it('handles SUCCESS', () => {
      const initialState = deepFreeze({
        loading: true,
        byId: {},
        trendsById: {}
      });
      const action = {type: types.FETCH_HOME_SUCCESS, 
        articles: [
          {_id: 1, title: 'Article 1'},
          {_id: 2, title: 'Article 2'},
          {_id: 3, title: 'Article 3'}
        ],
        trends: [
          {_id: 1, trend: 'Trump', popularity: 77},
          {_id: 2, trend: 'Joe', popularity: 10},
          {_id: 3, trend: 'Laura', popularity: 34}
        ]
      };
      const expectedState = {
        loading: false,
        byId: {
          '1': {_id: 1, title: 'Article 1'},
          '2': {_id: 2, title: 'Article 2'},
          '3': {_id: 3, title: 'Article 3'}
        },
        trendsById: {
          '1': {_id: 1, trend: 'Trump', popularity: 77},
          '2': {_id: 2, trend: 'Joe', popularity: 10},
          '3': {_id: 3, trend: 'Laura', popularity: 34}
        }
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
  });
});