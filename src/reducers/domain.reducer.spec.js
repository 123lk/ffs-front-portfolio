import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import domain, { initialState } from './domain.reducer';

describe('reducers:domain', () => {
  it('is a function', () => {
    expect(domain).to.be.a('function');
  });
  it('returns the prevState for unhandled actions', () => {
    const initialState = {
      whatever: 10291094810
    };
    const action = { type: 'whatever' };
    expect(domain(initialState, action)).to.equal(initialState);
  });
  it('returns the initialState if no prevState is passed', () => {
    const action = { type: 'whatever' };
    expect(domain(undefined, action)).to.equal(initialState);
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
      expect(domain(initialState, action)).to.eql(expectedState);
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
      expect(domain(initialState, action)).to.eql(expectedState);
    });
    it('handles SUCCESS', () => {
      const initialState = deepFreeze({
        loading: false,
        error: null,
        domainArticlesById: {}, 
        domainData: {}
      });
      const action = {
        type: types.FETCH_DOMAIN_SUCCESS,
        data: {
          domainData: {
            _id: 1,
            domainName: 'News company blah',
            registeredDomains: 'www.random1.com',
            domainDescription: 'an overview of the organisation'
          },
          articles: [
            { _id: 1, title: 'Article 1', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
            { _id: 2, title: 'Article 2', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: false },
            { _id: 3, title: 'Article 3', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true }
          ]
        }
      };
      const expectedState = {
        loading: false,
        error: null,
        domainData: {
          _id: 1,
          domainName: 'News company blah',
          registeredDomains: 'www.random1.com',
          domainDescription: 'an overview of the organisation'
        },
        domainArticlesById: {
          1: { _id: 1, title: 'Article 1', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          2: { _id: 2, title: 'Article 2', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: false },
          3: { _id: 3, title: 'Article 3', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true }
        }
      };
      expect(domain(initialState, action)).to.eql(expectedState);
    });
  });
});