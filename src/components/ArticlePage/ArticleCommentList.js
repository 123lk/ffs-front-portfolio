import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { filterBaseCommentsAndSortByVote } from '../../helpers/index';

import ArticleComment from './ArticleComment';

const ArticleCommentList = ({ comments }) => {
  let baseComments = filterBaseCommentsAndSortByVote(comments);

  let renderComments = function (comments) {
    return _.reduce(comments, (acc, comment, i) => {
      acc.push(<ArticleComment key={i} author={comment.author} comment={comment.comment} votes={comment.votes} parentCommentId={comment._id} length={comment.children.length} renderComments={renderComments} children={comment.children} articleId={comment.articleId}/>);
      return acc;
    }, []);
  };
  return (
    <div>
      {renderComments(baseComments)}
    </div>
  );

};

ArticleCommentList.propTypes = {
  comments: PropTypes.shape({
    author: PropTypes.string,
    children: PropTypes.array,
    comment: PropTypes.string,
    votes: PropTypes.number,
    articleId: PropTypes.number
  }),
};

export default ArticleCommentList;