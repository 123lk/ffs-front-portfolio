import React from 'react';
import PropTypes from 'prop-types';
import ArticleCommentForm from './ArticleCommentForm';

class ArticleComment extends React.Component {
  constructor () {
    super ();
    this.state = {
      showReply: false,
      showComments: false
    };
  }
  onClickReply(event) {
    event.preventDefault();
    this.setState({showReply: !this.state.showReply});
  }
  onClickShowComments(event) {
    event.preventDefault();
    this.setState({showComments: !this.state.showComments});
  }
  showComments(length) {
    if (length) return 'Show ' + length + ' comments';
  }
  render() {
    return (
      <div className="container-fluid comment-card">
        <div className="container vote">
          <div className="glyphicon glyphicon-arrow-up" aria-hidden="true"></div>
          <div className="vote-count">{this.props.votes}</div>
          <div className="glyphicon glyphicon-arrow-down" aria-hidden="true"></div>
        </div>
        <div className="rhs">
          <span className="comment-author"> {this.props.author}</span>
          <div> {this.props.comment}</div>
          <a onClick= {this.onClickReply.bind(this)} type="button"><span>Reply</span></a>
          <div className="divider" />
          <a onClick= {this.onClickShowComments.bind(this)} type="button"><span>{this.showComments(this.props.length)}</span></a>
        </div>
        {this.state.showReply && <ArticleCommentForm parentCommentId={this.props.parentCommentId}/>}
        {this.state.showComments && <div className="child-component">{this.props.renderComments(this.props.children)}</div>}
      </div>
    );
  }
}

ArticleComment.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  parentCommentId: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};


export default ArticleComment;

