import React from 'react';
import ArticleCommentList from './ArticleCommentList';
import ArticleTextArea from './ArticleTextArea';

class ArticlePage extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a ArticlePage</h1>
        <ArticleTextArea/>
        <ArticleCommentList/>
      </div>
    );
  }
}

export default ArticlePage;