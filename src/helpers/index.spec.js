import { expect } from 'chai';
import * as helpers from './index';

const normalizeArrayById = helpers.normalizeArrayById;
const getCommentsByVotes = helpers.getCommentsByVotes;
const mapCommentChildren = helpers.mapCommentChildren;
const populateChildrenArray = helpers.populateChildrenArray;

describe('normalizeArrayById', function () {
  it('is a function', function () {
    expect(normalizeArrayById).to.be.a('function');
  });
  it('returns an object', function () {
    expect(normalizeArrayById([1])).to.be.an('object');
  });
  it('returns objects with their id as a key', function () {
    let actual = normalizeArrayById([{ _id: 2 }]);
    let expected = { 2: { _id: 2 } };
    expect(actual).to.eql(expected);
  });
});

describe('getCommentsByVotes', function () {
  it('is a function', function () {
    expect(getCommentsByVotes).to.be.a('function');
  });
  it('returns an array', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    };
    expect(getCommentsByVotes(commentsById)).to.be.an('array');
  });
  it('returns an array of comments ordered by votes in descending order', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    };
    let actual = getCommentsByVotes(commentsById);
    let expected = [
      { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 },
      { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 }
    ];
    expect(actual).to.eql(expected);
  });
});

describe('mapCommentChildren', function () {
  it('is a function', function () {
    expect(mapCommentChildren).to.be.a('function');
  });
  it('returns an array', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    };
    expect(mapCommentChildren(commentsById)).to.be.an('object');
  });
  it('adds the property children and assigns it the value of an empty array', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    };
    let actual = mapCommentChildren(commentsById);
    let expected = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23, children: [] }
    };
    expect(actual).to.eql(expected);
  });
});

describe('populateChildrenArray', function () {
  it('is a function', function () {
    expect(populateChildrenArray).to.be.a('function');
  });
  it('returns an object', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [] },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
    };
    expect(populateChildrenArray(commentsById)).to.be.an('object');
  });
  it('checks threadId and if not null, populates children array in parent', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [] },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
    };
    let actual = populateChildrenArray(commentsById);
    let expected = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2] },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [3] },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
    };
    expect(actual).to.eql(expected);
  });
});