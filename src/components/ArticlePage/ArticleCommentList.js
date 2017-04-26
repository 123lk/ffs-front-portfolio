import React from 'react';
import ArticleComment from './ArticleComment';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as helpers from '../../helpers/index';

class ArticleCommentList extends React.Component {
  render() {
    return (
      <div>
        {_.map(helpers.sortCommentsByVotes(this.props.comments), (comment, i) => {
          return <ArticleComment key={i} author={comment.author} comment={comment.comment} votes={comment.votes} />;
        })}
        <button type="button" className="btn btn-primary paginate"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>  Previous</button>
        <button type="button" className="btn btn-primary paginate"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>  Next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.articles.commentsById
  };
}

export default connect(mapStateToProps)(ArticleCommentList);