import React from 'react';
import PropTypes from 'prop-types';

import ArticleComment from './ArticleComment';

const ArticleCommentList = ({comments}) => (
  <div>
    {comments.map((comment, i) => {
      return <ArticleComment key={i} author={comment.author} comment={comment.comment} votes={comment.votes} />;
    })}
  </div>
);

ArticleCommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default ArticleCommentList;