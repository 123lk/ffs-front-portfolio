import _ from 'underscore';

export function normalizeArrayById(arr) {
  return arr.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getCommentsByVotes(commentsById) {
  return commentsById.sort(function (a, b) {
    return b.votes - a.votes;
  });
}

export function mapCommentChildren(commentsById) {
  let comments = Object.values(commentsById);
  return normalizeArrayById(_.map(comments, (comment) => {
    comment.children = [];
    return comment;
  }));
}

export function populateChildrenArray(commentsById) {
  for (let key in commentsById) {
    let parent = commentsById[key].threadId;
    if (parent) {
      commentsById[parent].children.push(Number(key));
    }
  }
  return commentsById;
}

// export function setCommentLevel(commentsById) {
//   for (let key in commentsById) {
//     commentsById[key].level = findCommentLevel(commentsById[key], commentsById);
//   }
//   return commentsById;
// }

// export function findCommentLevel(comment, commentsById) {
//   if (comment.threadId === null) return 0;
//   else {
//     return 1 + findCommentLevel(commentsById[comment.threadId], commentsById);
//   }
// }

export function sortChildCommentsByVote(commentsById) {
  for (let key in commentsById) {
    getCommentsByVotes(commentsById[key].children = _.map(commentsById[key].children, (commentId) => {
      return commentsById[commentId];
    }));
  }
  return commentsById;
}

export function setIndentationFormat(commentsById) {
  return sortChildCommentsByVote(populateChildrenArray(mapCommentChildren(commentsById)));
}

export function filterBaseCommentsAndSortByVote(comments) {
  return getCommentsByVotes(_.filter(comments, (comment) => {
    return comment.threadId === null;
  }));
}


