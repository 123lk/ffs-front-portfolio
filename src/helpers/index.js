import _ from 'underscore';

export function normalizeArrayById(arr) {
  return arr.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function sortCommentsByVotes(commentsById) {
  const comments = Object.values(commentsById);
  return comments.sort(function (a, b) {
    return b.votes - a.votes;
  });
}

// map through all comments
// add property children: []
// loop through all comments
// check if threadId is not null
// if not null (e.g 2)
// navigate to comment id (2)
// push threadId (2) into children array of commentId(2) 

export function mapCommentChildren (commentsById) {
  _.map(commentsById, (comment) => {
     return comment.children = [];
  });
}