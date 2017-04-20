import React from 'react';
import ArticleCommentList from './ArticleCommentList';
import ArticleTextArea from './ArticleTextArea';

class ArticlePage extends React.Component {
  render () {
    return (
      <div>
        <div className="row article-text-area">
          <ArticleTextArea/>
        </div>
        <div className="row article-comment-list">
          <ArticleCommentList/>
        </div>
      </div>
    );
  }
}

export default ArticlePage;