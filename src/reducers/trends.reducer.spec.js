import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import trends, { initialState } from './trends.reducer';

describe('reducers:trends', () => {
  it('is a function', () => {
    expect(trends).to.be.a('function');
  });
  it('returns the prevState for unhandled actions', () => {
    const initialState = {
      whatever: 10291094810
    };
    const action = { type: 'whatever' };
    expect(trends(initialState, action)).to.equal(initialState);
  });
  it('returns the initialState if no prevState is passed', () => {
    const action = { type: 'whatever' };
    expect(trends(undefined, action)).to.equal(initialState);
  });
  describe('action:FETCH_PROPERS_TRENDS', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = { type: types.FETCH_PROPER_TRENDS_REQUEST };
      const expectedState = {
        loading: true,
        error: null
      };
      expect(trends(initialState, action)).to.eql(expectedState);
    });
    it('handles ERROR', () => {
      const initialState = deepFreeze({
        loading: true,
        error: null
      });
      const action = { type: types.FETCH_PROPER_TRENDS_ERROR, error: 'hello' };
      const expectedState = {
        loading: false,
        error: 'hello'
      };
      expect(trends(initialState, action)).to.eql(expectedState);
    });
    it('handles SUCCESS', () => {
      const initialState = deepFreeze({
        loading: false,
        error: null,
        trendsById: {}
      });
      const action = {
        type: types.FETCH_PROPER_TRENDS_SUCCESS,
        data: {
          trends: [
            { _id: 1, trend: 'Trump', popularity: 77 },
            { _id: 2, trend: 'Joe', popularity: 10 },
            { _id: 3, trend: 'Laura', popularity: 34 }
          ]
        }
      };
      const expectedState = {
        loading: false,
        error: null,
        trendsById: {
          1: { _id: 1, trend: 'Trump', popularity: 77 },
          2: { _id: 2, trend: 'Joe', popularity: 10 },
          3: { _id: 3, trend: 'Laura', popularity: 34 }
        }
      };
      expect(trends(initialState, action)).to.eql(expectedState);
    });
  });
});