import React from 'react';
import PropTypes from 'prop-types';
import ArticleCommentForm from './ArticleCommentForm';
import VoteButton from './VoteButton';

class ArticleComment extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showReply: false,
      showComments: false
    };
  }
  onClickReply(event) {
    event.preventDefault();
    this.setState({ showReply: !this.state.showReply });
  }
  onClickShowComments(event) {
    event.preventDefault();
    this.setState({ showComments: !this.state.showComments });
  }
  showComments(length) {
    if (length) return 'Show ' + length + ' comments';
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="media">
            <div className="media-left">
              <div className="vote">
                <VoteButton id={this.props.commentId} votes={this.props.votes}/>
              </div>
              </div>
              <div className="media-content">
                <span className="author">{this.props.author}</span>
                <div> {this.props.comment}</div>
            </div>
          </div>
          <a onClick={this.onClickShowComments.bind(this)}  type="button"><span className= "showComment">{this.showComments(this.props.length)}</span></a>
          <a onClick={this.onClickReply.bind(this)} type="button"><span className="reply">Reply</span></a>
          {this.state.showReply && <ArticleCommentForm articleId={this.props.articleId} threadId={this.props.commentId} />}
          <div className="" />
        </div>
        {this.state.showComments && <div className="child-component">{this.props.renderComments(this.props.children)}</div>}
      </div>
    );
  }
}

ArticleComment.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  articleId: PropTypes.number.isRequired,
  renderComments: PropTypes.func.isRequired
};


export default ArticleComment;

