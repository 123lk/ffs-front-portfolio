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
        <div className="vote">
          <h3 className="glyphicon glyphicon-arrow-up" aria-hidden="true"></h3>
          <h3 className="glyphicon glyphicon-arrow-down" aria-hidden="true"></h3>
        </div>
        <div className="rhs">
          <h4> {this.props.author}</h4>
          <h4> {this.props.comment}</h4>
          <h4>{this.props.votes}</h4>
          <a onClick= {this.onClickReply.bind(this)} type="button"><h6>Reply</h6></a>
          <a onClick= {this.onClickShowComments.bind(this)} type="button"><h6>{this.showComments(this.props.length)}</h6></a>
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

