import React from 'react';

class ArticleComment extends React.Component {
  render() {
    return (
      <div className="container-fluid comment-card">
        <p>
          {this.props.author}
          {this.props.comment}
          {this.props.votes}
        </p>
      </div>
    );
  }
}

export default ArticleComment;