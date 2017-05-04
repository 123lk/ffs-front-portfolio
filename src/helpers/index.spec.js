import { expect } from 'chai';
import * as helpers from './index';

const normalizeArrayById = helpers.normalizeArrayById;
const getCommentsByVotes = helpers.getCommentsByVotes;
const mapCommentChildren = helpers.mapCommentChildren;
const populateChildrenArray = helpers.populateChildrenArray;
// const setCommentLevel = helpers.setCommentLevel;
// const findCommentLevel = helpers.findCommentLevel;
const setIndentationFormat = helpers.setIndentationFormat;
const filterBaseCommentsAndSortByVote = helpers.filterBaseCommentsAndSortByVote;
const sortChildCommentsByVote = helpers.sortChildCommentsByVote;

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
    let commentsById = [
      { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    ];
    expect(getCommentsByVotes(commentsById)).to.be.an('array');
  });
  it('returns an array of comments ordered by votes in descending order', function () {
    let commentsById = [
      { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 }
    ];
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

// describe('setCommentLevel', function () {
//   it('is a function', function () {
//     expect(setCommentLevel).to.be.a('function');
//   });
//   it('returns an object', function () {
//     let commentsById = {
//       1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
//       2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [] },
//       3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
//     };
//     expect(setCommentLevel(commentsById)).to.be.an('object');
//   });
//   it('adds a level key with a number representing how many levels deep the comment is', function () {
//     let commentsById = {
//       1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
//       2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [] },
//       3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
//     };
//     let actual = setCommentLevel(commentsById);
//     let expected = {
//       1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [], level: 0 },
//       2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [], level: 1 },
//       3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [], level: 2 }
//     };
//     expect(actual).to.eql(expected);
//   });
// });

// describe('findCommentLevel', function () {
//   it('is a function', function () {
//     expect(findCommentLevel).to.be.a('function');
//   });
//   it('returns a number', function () {
//     let comment = { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [], level: 1 };
//     let commentsById = {
//       1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [] },
//       2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [] },
//       3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [] }
//     };
//     let actual = findCommentLevel(comment, commentsById);
//     let expected = 1;
//     expect(actual).to.equal(expected);
//   });
// });

describe('sortChildCommentsByVote', function () {
  it('is a function', function () {
    expect(sortChildCommentsByVote).to.be.a('function');
  });
  it('returns an object', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2, 3, 4], level: 0 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 13, children: [], level: 1 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 14, children: [], level: 1 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 15, children: [], level: 1 }
    };
    expect(sortChildCommentsByVote(commentsById)).to.be.an('object');
  });
  it('sort child comments by vote in descending order', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2, 3, 4], level: 0 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 13, children: [], level: 1 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 14, children: [], level: 1 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 15, children: [], level: 1 }
    };
    let actual = sortChildCommentsByVote(commentsById);
    let expected = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [{ _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 15, children: [], level: 1 }, { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 14, children: [], level: 1 }, { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 13, children: [], level: 1 }], level: 0 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 13, children: [], level: 1 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 14, children: [], level: 1 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 15, children: [], level: 1 }
    };
    expect(actual).to.eql(expected);
  });
});

describe('setIndentationFormat', function () {
  it('is a function', function () {
    expect(setIndentationFormat).to.be.a('function');
  });
  it('returns an object', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23 }
    };
    expect(setIndentationFormat(commentsById)).to.be.an('object');
  });
  it('adds children and level properties and populates them correctly', function () {
    let commentsById = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23 }
    };
    let actual = setIndentationFormat(commentsById);
    let expected = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [{ _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [{ _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [{ _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [] }] }] }] },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [{ _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [{ _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [] }] }] },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [{ _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [] }] },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [] }
    };
    expect(actual).to.eql(expected);
  });
});

describe('filterBaseCommentsAndSortByVote', function () {
  it('is a function', function () {
    expect(filterBaseCommentsAndSortByVote).to.be.a('function');
  });
  it('returns an array', function () {
    let comments = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2], level: 0 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [3], level: 1 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [4], level: 2 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [], level: 3 }
    };
    expect(filterBaseCommentsAndSortByVote(comments)).to.be.an('array');
  });
  it('returns an array of only base comments orderd by highest vote', function () {
    let comments = {
      1: { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2], level: 0 },
      2: { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: 1, articleId: 1, votes: 23, children: [3], level: 1 },
      3: { _id: 3, author: 'some person2', comment: 'this is a comment2', threadId: 2, articleId: 1, votes: 23, children: [4], level: 2 },
      4: { _id: 4, author: 'some person2', comment: 'this is a comment2', threadId: 3, articleId: 1, votes: 23, children: [], level: 3 }
    };
    let actual = filterBaseCommentsAndSortByVote(comments);
    let expected = [
      { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12, children: [2], level: 0 }
    ];
    expect(actual).to.eql(expected);
  });
});

