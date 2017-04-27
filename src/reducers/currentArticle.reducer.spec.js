import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import currentArticle, { initialState } from './currentArticle.reducer';

describe('reducers:currentArticle', () => {
  it('is a function', () => {
    expect(currentArticle).to.be.a('function');
  });
  it('returns the prevState for unhandled actions', () => {
    const initialState = {
      whatever: 10291094810
    };
    const action = { type: 'whatever' };
    expect(currentArticle(initialState, action)).to.equal(initialState);
  });
  it('returns the initialState if no prevState is passed', () => {
    const action = { type: 'whatever' };
    expect(currentArticle(undefined, action)).to.equal(initialState);
  });
  describe('action:FETCH_CURRENT_ARTICLE', () => {
    it('handles REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: 'hello'
      });
      const action = { type: types.FETCH_CURRENT_ARTICLE_REQUEST };
      const expectedState = {
        loading: true,
        error: null
      };
      expect(currentArticle(initialState, action)).to.eql(expectedState);
    });
    it('handles ERROR', () => {
      const initialState = deepFreeze({
        loading: true,
        error: null
      });
      const action = { type: types.FETCH_CURRENT_ARTICLE_ERROR, error: 'hello' };
      const expectedState = {
        loading: false,
        error: 'hello'
      };
      expect(currentArticle(initialState, action)).to.eql(expectedState);
    });
    it('handles SUCCESS', () => {
      const initialState = deepFreeze({
        loading: false,
        error: null,
        articleData: {},
        commentsById: {}
      });
      const action = {
        type: types.FETCH_CURRENT_ARTICLE_SUCCESS,
        data: {
          articleData: {
            _id: 1,
            title: 'Article 1',
            domain: 'www.random1.com',
            description: 'this is some text about the article',
            articleIsFakeNews: true
          },
          comments: [
            { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
            { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
          ]
        }
      };
      const expectedState = {
        loading: false,
        error: null,
        articleData: {
          _id: 1,
          title: 'Article 1',
          domain: 'www.random1.com',
          description: 'this is some text about the article',
          articleIsFakeNews: true
        },
        commentsById: {
          1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
          2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
        }
      };
      expect(currentArticle(initialState, action)).to.eql(expectedState);
    });
  });
});