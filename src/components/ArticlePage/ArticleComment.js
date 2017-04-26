import React from 'react';

class ArticleComment extends React.Component {
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
          <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span></button>
        </div>
      </div>
    );
  }
}

export default ArticleComment;

