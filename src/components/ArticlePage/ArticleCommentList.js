import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { filterBaseCommentsAndSortByVote } from '../../helpers/index';

import ArticleComment from './ArticleComment';

const ArticleCommentList = ({ comments }) => {
  let baseComments = filterBaseCommentsAndSortByVote(comments);

  let renderComments = function (comments) {
    return _.reduce(comments, (acc, comment, i) => {
      acc.push(<ArticleComment key={i} author={comment.author} comment={comment.comment} votes={comment.votes} parentCommentId={comment._id} length={comment.children.length} renderComments={renderComments} children={comment.children} />);
      return acc;
    }, []);
  };
  return (
    <div>
      {renderComments(baseComments)}
      <button type="button" className="btn btn-primary paginate btn-xs"><span className="glyphicon glyphicon-menu-left btn-xs" aria-hidden="true"></span>  Previous</button>
      <button type="button" className="btn btn-primary paginate btn-xs"><span className="glyphicon glyphicon-menu-right btn-xs" aria-hidden="true"></span>  Next</button>
    </div>
  );

};

ArticleCommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default ArticleCommentList;