import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import articlesReducer, { initialState } from './articles.reducer';

describe('reducers:articles', () => {
  it('is a function', () => {
    expect(articlesReducer).to.be.a('function');
  });
  it('returns the prevState for unhandled actions', () => {
    const initialState = {
      whatever: 10291094810
    };
    const action = { type: 'whatever' };
    expect(articlesReducer(initialState, action)).to.equal(initialState);
  });
  it('returns the initialState if no prevState is passed', () => {
    const action = { type: 'whatever' };
    expect(articlesReducer(undefined, action)).to.equal(initialState);
  });
  describe('action:FETCH_HOME', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = { type: types.FETCH_HOME_REQUEST };
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
      const action = { type: types.FETCH_HOME_ERROR, error: 'hello' };
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
      const action = {
        type: types.FETCH_HOME_SUCCESS,
        articles: [
          { _id: 1, title: 'Article 1' },
          { _id: 2, title: 'Article 2' },
          { _id: 3, title: 'Article 3' }
        ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 }
        ]
      };
      const expectedState = {
        loading: false,
        byId: {
          '1': { _id: 1, title: 'Article 1' },
          '2': { _id: 2, title: 'Article 2' },
          '3': { _id: 3, title: 'Article 3' }
        },
        trendsById: {
          '1': { _id: 1, trend: 'Trump', popularity: 77 },
          '2': { _id: 2, trend: 'Joe', popularity: 10 },
          '3': { _id: 3, trend: 'Laura', popularity: 34 }
        }
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
  });
  describe('action:FETCH_DOMAIN', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = { type: types.FETCH_DOMAIN_REQUEST };
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
      const action = { type: types.FETCH_DOMAIN_ERROR, error: 'hello' };
      const expectedState = {
        loading: false,
        error: 'hello'
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
    it('handles SUCCESS', () => {
      const initialState = deepFreeze({
        loading: true,
        domain: {},
        byId: {},
        trendsById: {}
      });
      const action = {
        type: types.FETCH_DOMAIN_SUCCESS,
        domain: { _id: 1, domainName: 'News company blah', registeredDomains: ['www.random1.com', 'www.random2.com'], domainDescription: 'an overview of the organisation' },
        articles: [
          { _id: 1, title: 'Article 1' },
          { _id: 2, title: 'Article 2' },
          { _id: 3, title: 'Article 3' }
        ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 }
        ]
      };
      const expectedState = {
        loading: false,
        domain: { _id: 1, domainName: 'News company blah', registeredDomains: ['www.random1.com', 'www.random2.com'], domainDescription: 'an overview of the organisation' },
        byId: {
          '1': { _id: 1, title: 'Article 1' },
          '2': { _id: 2, title: 'Article 2' },
          '3': { _id: 3, title: 'Article 3' }
        },
        trendsById: {
          '1': { _id: 1, trend: 'Trump', popularity: 77 },
          '2': { _id: 2, trend: 'Joe', popularity: 10 },
          '3': { _id: 3, trend: 'Laura', popularity: 34 }
        }
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
  });
  describe('action:FETCH_ARTICLE', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = { type: types.FETCH_ARTICLE_REQUEST };
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
      const action = { type: types.FETCH_ARTICLE_ERROR, error: 'hello' };
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
        trendsById: {},
        commentsById: {}
      });
      const action = {
        type: types.FETCH_ARTICLE_SUCCESS,
        articles: [
          { _id: 1, title: 'Article 1' }
        ],
        comments: [
          { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
          { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 },
          { _id: 3, author: 'some person3', comment: 'this is a comment3', threadId: null, articleId: 1, votes: 2 }
        ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 }
        ]
      };
      const expectedState = {
        loading: false,
        byId: {
          '1': { _id: 1, title: 'Article 1' }
        },
        trendsById: {
          '1': { _id: 1, trend: 'Trump', popularity: 77 },
          '2': { _id: 2, trend: 'Joe', popularity: 10 },
          '3': { _id: 3, trend: 'Laura', popularity: 34 }
        },
        commentsById: {
          '1': { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
          '2': { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 },
          '3': { _id: 3, author: 'some person3', comment: 'this is a comment3', threadId: null, articleId: 1, votes: 2 }
        }
      };
      expect(articlesReducer(initialState, action)).to.eql(expectedState);
    });
  });

});