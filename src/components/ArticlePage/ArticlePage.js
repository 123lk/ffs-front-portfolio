import React from 'react';
import ArticleCommentList from './ArticleCommentList';
import ArticleTextArea from './ArticleTextArea';
import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';

class ArticlePage extends React.Component {
  componentDidMount() {
    this.props.fetchArticle();
  }
  render() {
    return (
      <div>
        <div className="row article-text-area">
          <ArticleTextArea />
        </div>
        <div className="row article-comment-list">
          <ArticleCommentList />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticle: () => {
      dispatch(actions.fetchArticle());
    }
  };
}

export default connect(null, mapDispatchToProps)(ArticlePage);